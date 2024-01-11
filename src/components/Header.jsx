import React,{useState}from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import styles from "../style/styles";
import { categoriesData } from "../static/data";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import DropDown from "./DropDown";
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
function Header() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="h-14 w-full bg-pink-500 flex items-center mx-auto ">
      
     {/* categories */}
     <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[50px]  w-[30px] ">
              {/* <BiMenuAltLeft size={30} className="absolute top-3 left-2" /> */}
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
               
              </button>
              <BiMenuAltLeft
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          <div class="mx-auto w-[70%]">

<Searchbar/>

</div>
<Link to="/SellershopPage">

<button class="bg-white text-pink-500 hover:bg-pink-600 hover:text-white rounded-sm w-[8rem] h-[3rem]">
   open store
</button>   
</Link>    
     
    </div>
  );
}

export default Header;
