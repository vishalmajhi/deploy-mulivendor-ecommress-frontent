import React, { useState } from "react";
import styles from '../style/styles'; // Adjust the path to your styles file
import { AiOutlineMessage, } from "react-icons/ai";
import { AiFillHeart, AiOutlineHeart, } from "react-icons/ai";
function ProductDetails({ data }) {
  const [select, setSelect] = React.useState(0);
  const [count, setCount] = useState(1);




  if (!data) {
    return <div className="h-full w-full bg-slate-300"></div>
  }

  const imageUrl = data.image_Url && data.image_Url[select] && data.image_Url[select].url;
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
    <div className="bg-white">
      <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
        <div className="w-full py-5">
          <div className="block w-full  md:flex lg:flex">
            <div className="block w-full 800px:w-[50%]">
              <img src={data.image_Url[select].url} alt="" className='w-[60%]' />

              <div className="w-full flex">

                <div className={`${select === 0 ? "border" : "null"} cursor-pointer`}>
                  <img src={data?.image_Url[0].url} alt=""
                    className='h-[200px]'
                    onClick={() => setSelect(0)} />
                </div>
                <div className={`${select === 1 ? "border" : "null"} cursor-pointer`}>
                  <img src={data?.image_Url[1].url} alt=""
                    className='h-[200px]'
                    onClick={() => setSelect(1)} />
                </div>
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
              <div className=" block lg:flex md:flex gap-16">
                <div className="mt-4">

                  <img src={data.shop.shop_avatar.url} alt="" className="w-[50px] h-[50px] rounded-full mr-2" />
                </div>

                <div>
                  <h3 className={`${styles.shop_name}`} >
                    {data.shop.name}
                  </h3>
                  <h5 className="pb-3 text-[15px]">
                    ({data.shop.ratings}) Ratings
                  </h5>
                </div>

                <div>
                  <div className={`${styles.button} bg-pink-600 mt-4 rounded-[4px] h-11`} onClick={handleMessageSubmit}>
                    <span className="text-white flex items-center" >
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span>

                  </div>

                </div>
                <div> <h5 className="text-[16px] text-red-700 ">
                  {data.total_sell} Sold out
                </h5></div>
              </div>
            </div>

          </div>

        </div>
        < ProductDetailsInfo data={data}/>
      </div>
    </div>
  );
}
// const ProductDetailsInfo=({data})=>{
//   const [active, setActive] = useState(1);
//   return(
// <>
// <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
//       <div className="w-full flex justify-between border-b pt-10 pb-2">
//         <div className="relative">
//         <h5
//             className={
//               "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
//             }
//             onClick={() => setActive(1)}
//           >
//             Product Details
//           </h5>
//           {active === 1 ? (
//             <div className={`${styles.active_indicator}`} />
//           ) : null}
//            <div className="relative">
//           <h5
//             className={
//               "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
//             }
//             onClick={() => setActive(2)}
//           >
//             Product Reviews
//           </h5>
//           {active === 2 ? (
//             <div className={`${styles.active_indicator}`} />
//           ) : null}
//         </div>
//         <div className="relative">
//           <h5
//             className={
//               "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
//             }
//             onClick={() => setActive(3)}
//           >
//             Seller Information
//           </h5>
//           {active === 3 ? (
//             <div className={`${styles.active_indicator}`} />
//           ) : null}
//         </div>
//       </div>
//         </div>
//         </div>
       
        

// </>
    
//   )
// }
const ProductDetailsInfo = ({
  data,
 
}) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2 ">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
{
 active===1?(
  <>
  < p className="py-2 text-[10px] leading-8 pd-10 whitespace-pre-line">

  As of my last knowledge update in January 2022, I don't have real-time information, and product details may have changed. I recommend checking the official Apple website or contacting an Apple authorized retailer for the most up-to-date information on MacBook products.

As of my last update, here are some general details about the MacBook lineup:
As of my last knowledge update in January 2022, I don't have real-time information, and product details may have changed. I recommend checking the official Apple website or contacting an Apple authorized retailer for the most up-to-date information on MacBook products.

  </p>
  < p className="py-2 text-[10px] leading-8 pd-10 whitespace-pre-line">

As of my last knowledge update in January 2022, I don't have real-time information, and product details may have changed. I recommend checking the official Apple website or contacting an Apple authorized retailer for the most up-to-date information on MacBook products.

As of my last update, here are some general details about the MacBook lineup:
As of my last knowledge update in January 2022, I don't have real-time information, and product details may have changed. I recommend checking the official Apple website or contacting an Apple authorized retailer for the most up-to-date information on MacBook products.

</p>
< p className="py-2 text-[10px] leading-8 pd-10 whitespace-pre-line">

As of my last knowledge update in January 2022, I don't have real-time information, and product details may have changed. I recommend checking the official Apple website or contacting an Apple authorized retailer for the most up-to-date information on MacBook products.

As of my last update, here are some general details about the MacBook lineup:
As of my last knowledge update in January 2022, I don't have real-time information, and product details may have changed. I recommend checking the official Apple website or contacting an Apple authorized retailer for the most up-to-date information on MacBook products.

</p>
  </>
 ):null
}
{
  active===2 ?(
<>
<div className="w-full justify-center min-h-[40vh] flex items-center">
<p>No review yet ?</p>
</div>

</>
  ):null
}

{
  active===3 ?(
      <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
         
              <div className="flex items-center">
                <img
                  src={data.shop.shop_avatar.url}
                  className="w-[50px] h-[50px] rounded-full"
                  alt=""
                />
                <div>
                    <h3 className={`${styles.shop_name}`} >
                      {data.shop.name}
                    </h3>
                    <h5 className="pb-3 text-[15px]">
                      ({data.shop.ratings}) Ratings
                    </h5>
                  </div>
              </div>
       
           
          </div>
        </div>
   
  ):null
}
    </div>
  );
};
export default ProductDetails;
