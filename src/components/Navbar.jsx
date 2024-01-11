import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { productData } from '../static/data';
import Header from './Header';
import { useSelector } from 'react-redux'
import Cart from './Card'
import Wishlist from './Wishlist';
function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);
  console.log(user);
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  return (
    <div className="">
      <section className="relative mx-auto overflow-hidden my-auto  ">
        <nav className="flex justify-between text-white w-screen bg-pink-500">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <Link to="/" className="text-3xl font-bold font-heading ">
              Logo
            </Link>
            {/* Navlinks */}
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <Link to="/" className="hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Category
                </a>
              </li>
              <li>
                <a href="/productpage" className="hover:text-gray-200">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className=" flex ml-[46%] md:flex items-center space-x-5">
              <div href="#" className="hover:text-gray-200" onClick={()=>setOpenWishlist(true)}>
                <AiOutlineHeart size={27}
                  title="Add to Watchlist" />
              </div>
              {isAuthenticated ? (
                <Link to="/profilepage" className="hover:text-gray-200">
                  {/* Link to user profile or dashboard */}
                  <img
                        src={`${user.avatar.url}`}
                        alt=""
                        className="w-[30px] h-[30px] rounded-full border-[3px] border-[#0eae88]"
                      />      
                  <img src={user.avatar} alt="" />
                </Link>
              ) : (
                <Link to="/login" className="hover:text-gray-200">
                  <FaUserCircle size={30} title="Login/signup" />
                </Link>
              )}

              <div  className="flex items-center hover:text-gray-200" onClick={()=>setOpenCart(true)}>
                <HiShoppingCart size={27}
                  title="Add to cart" />
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>
                </div>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? (
            <Wishlist setOpenWishlist={setOpenWishlist} />
          ) : null}
        </nav>

      </section>
    </div>
  );
}

export default Navbar;
