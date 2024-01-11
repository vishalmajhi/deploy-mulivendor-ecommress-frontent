import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { productData } from '../static/data';

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const searchRef = useRef(null);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
    setDropdownVisible(true);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  const handleClickInside = (e) => {

    e.stopPropagation();
  };

  return (
    <div className="w-[90%] relative mx-auto" ref={searchRef}>
      <input
        type="text"
        placeholder="Search Product..."
        value={searchTerm}
        onChange={handleSearchChange}
        onClick={handleClickInside} // Prevent closing dropdown when clicking inside the search bar
        className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
      />
      <AiOutlineSearch
        size={30}
        className="absolute right-2 top-1.5 cursor-pointer"
      />
      {searchData && searchData.length !== 0 && dropdownVisible ? (
        <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
          {searchData.map((i, index) => (
            <Link to={`/product/${i.name}`} key={index}>
              <div className="w-full flex items-start-py-3">
                <img
                  src={i.image_Url && i.image_Url[0]?.url}
                  alt=""
                  className="w-[40px] h-[40px] mr-[10px]"
                />
                <h1>{i.name}</h1>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Searchbar;
