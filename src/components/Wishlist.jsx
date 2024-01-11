import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import styles from "../style/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Wishlist = ({ setOpenWishlist}) => {
    const cardData = [
        {
            name: "iphone 15 pro max ",
            description: "test",
            price: 2344,
        },
        {
            name: "iphone 15 pro max ",
            description: "test",
            price: 2344,
        },
        {
            name: "iphone 15 pro max ",
            description: "test",
            price: 2344,
        },
        {
            name: "iphone 15 pro max ",
            description: "test",
            price: 2344,
        },
        
    ];

    return (
        <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10 ">
            <div className="fixed top-0 right-0 min-h-full w-[80%] md:w-[40%] lg:w-[25%] bg-white flex flex-col justify-between shadow-sm ">
                <div>
                    <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
                        <RxCross1
                            size={25}
                            className="cursor-pointer text-white "
                            onClick={() => setOpenWishlist(false)}
                        />
                    </div>
                    {/* item length */}
                    <div className={`${styles.noramlFlex} p-8 bg-pink-500`}>
                        <IoBagHandleOutline
                            size={25}
                            className="cursor-pointer text-white"
                        />
                        <h5 className="pl-2 text-[20px] font-[500]  text-white">
                            3 items
                        </h5>
                    </div>
                    {/* cart single items */}
                    <br/>
                    <div className="w-full border">
                        {cardData && cardData.map((item, index) => (
                            <CartSingle key={index} data={item} />
                        ))}
                    </div>
                </div>
               
            </div>
        </div>
    );
};

const CartSingle = ({ data }) => {
    const [value, setValue] = useState(1);
    const totalPrice = data.price * value;

    return (
        <div className="border p-4">
            <div className="w-full flex items-center mx-aut0">
             
                <div className="flex mx-auto">
        
                <RxCross1
         size={15}
     className="cursor-pointer text-black " 
                        />

                <img src="https://smallimg.pngkey.com/png/small/86-865729_dress-png-gown-wedding-wedding-dresses-fantasy-gowns.png" alt="" className="w-[80px] h-[80px] ml-2"/>
            </div>
            <div className=" text-black">
                <h1>{data.name}</h1>
                <h4 className="font-[400] text-[15px] text-gray-400">
                    ${data.price}*{value}
                </h4>
                <h4 className="font-[600] text-[17px] pt-[3px] text-red-500 font-Roboto">{totalPrice}</h4>
            </div>
            <div>
                <BsCartPlus size={20} className="cursor-pointer text-black" tital="Add to card"/>
            </div>
            </div>
        </div>
    );
};

export default  Wishlist;
