import React from "react";

export default function Coupons(props){
    return(
        <div className="flex items-center gap-2 border-2 p-2 rounded-4xl w-72 shrink-0 grow-0">
            <img className="h-14" src="/coupon.avif" alt="" />
            <div>
                <h2 className="text-[1em] font-bold">BUY 2 GET 1 FREE</h2>
                <p className="text-sm text-gray-500">ROHIT69</p>
            </div>
        </div>
    );
}