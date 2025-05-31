import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Home(){
    return(
        <div>
            <Navbar />
            <div className="flex justify-center">
                <img className="rounded-3xl h-[80vh] w-[96%] mt-6 mb-6" src="/banner.jpg" alt="" />
            </div>
        </div>
    );
}