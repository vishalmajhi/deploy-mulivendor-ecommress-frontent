import React, { useState } from "react";
import styles from "../style/styles";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import ProductDetailsCard  from './ProductDetailsCard '

function ProductCard({data} ) {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
const d=data.name;
const product_name=d.replace(/\s+/g,"-")
  return (
    <>
      <div className="w-full h-[390px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
      <Link to={`/product/${product_name}`}>

<div className="flex justify-center h-[50%] w-[100%] mx-auto object-cover">
          <img
            src={data.image_Url[0].url}
            alt=""
            className="  object-cover"
          />
</div>
        </Link>
<Link to="/">
  <h5 className='text-blue-500'>{data.shop.name}</h5>
</Link>
<Link to={`/product/${product_name}`}>
  <h4 className="pb-3 font-[500]">
    {data.name.length>40 ? data.name.slice(0,40)+"...":data.name}
  </h4>

</Link>

<div className="flex ">
<AiFillStar
color='#F6BA00'  size={20} className="mr-2 cursor-pointer"/>
<AiFillStar color='#F6BA00'size={20} className="mr-2 cursor-pointer"/> 
<AiFillStar color='#F6BA00'size={20} className="mr-2 cursor-pointer"/> 
<AiFillStar color='#F6BA00' size={20} className="mr-2 cursor-pointer "/>
<AiOutlineStar color='#F6BA00' size={20} className="mr-2 cursor-pointer"/>

</div>



<div className="py-2 flex items-center justify-between">
  <div className="flex">
    <h5 className={`${styles.productDiscountPrice}`}>
    ₹{data.price === 0 ? data.price : data.discount_price } 

    </h5>
    <h4 className={`${styles.price}`}>
      {data.price ? "₹ "+data.price  :null}
    </h4>
  </div>
<span className="font-[400] text-[17px] text-[#68d284]">
  {data.total_sell } sold
</span>
</div>




<div className="w-full flex justify-center  ">

<button className=" bg-pink-500 hover:bg-pink-500 w-[95%] h-[2.6rem]  rounded text-white mx-auto ">
  ADD to card
</button>
</div>
        
        {/* side options */}
        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-2 top-14"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />
          <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            color="#444"
            title="Add to cart"
          />
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
