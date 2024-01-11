import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from '../style/styles';
import {
  AiFillHeart,

  AiOutlineHeart,

} from "react-icons/ai";
import {
  AiOutlineMessage,
} from "react-icons/ai";

function ProductDetailsCard({ setOpen, data }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(false);

  const handleMessageSubmit = () => {
    // Implement your message submit logic here
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="bg-[#fff]">
      {data ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[80vh] overflow-y-scroll 800px:h-[65vh] bg-white rounded-md shadow-sm relative p-4 md:flex">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50 "
              onClick={() => setOpen(false)}
            />
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img src={data.image_Url[0].url} alt="" />
                <div className="flex">
                  <img src={data.shop.shop_avatar.url} alt="" className="w-[50px] h-[50px] rounded-full mr-2" />

                  <div>
                    <h3 className={`${styles.shop_name}`} >
                      {data.shop.name}
                    </h3>
                    <h5 className="pb-3 text-[15px]">
                      ({data.shop.ratings}) Ratings
                    </h5>
                  </div>
                </div>
                <div className={`${styles.button} bg-pink-600 mt-4 rounded-[4px] h-11`} onClick={handleMessageSubmit}>
                  <span className="text-white flex items-center" >
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
                <h5 className="text-[16px] text-red-700 mt-5">
                  {data.total_sell} Sold out
                </h5>
              </div>

            </div>
            <div className="w-full 800px:w-[50%] pt-5 pl-[5px]">
              <h1 className={`${styles.productTitle} text-[20px]`}>
                {data.name}
              </h1>
              <p>{data.description}</p>
              <div className="flex pt-3">
                <h4 className={`${styles.productDiscountPrice}`}>
                  ₹  {data.discount_price}
                </h4>
                <h4 className={`${styles.price}`}>
                  {data.price ? data.price + "₹ " : null}
                </h4>
                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-pink-400 to-pink-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-pink-400 to-pink-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>

                  </div>

                </div>
              </div>

              <div className="mt-10">
                <button className=" bg-pink-500 hover:bg-pink-500 w-[95%] h-[2.6rem]  rounded text-white mx-auto ">
                  ADD to card
                </button>
              </div>

            </div>
          </div>

        </div>
      ) : null}
    </div>
  );
}

export default ProductDetailsCard;