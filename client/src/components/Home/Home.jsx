import React, { useState } from "react";
import Navbar from "./Navbar";
import { items } from "./Items";
import FoodItems from "./FoodItems";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import IconButton from '@mui/material/IconButton';
import NearBy from "./NearBy";

export default function Home(){

    const [slide, setSlide] = useState(0);

    function handleNext(){
        setSlide(slide + 3);
    }

    function handlePrev(){
        setSlide(slide - 3);
    }

    return(
        <div className="mx-auto flex flex-col max-w-[1200px] gap-6">
            <Navbar />
            <img className="h-[80vh] w-full m-0 p-0 rounded-2xl" src="/banner.jpg" alt="" />
            <div className="max-w-[1200px] ml-auto mr-auto">
                <div className="flex">
                    <h1 className="text-[1.5em] font-bold">Whats on your mind?</h1>
                    <div className="ml-auto">
                        <IconButton onClick={handlePrev} size="sm" style={{backgroundColor: '#EEEEEE', margin: '5px'}}>
                            <WestIcon size="sm" />
                        </IconButton>
                        <IconButton onClick={handleNext} style={{backgroundColor: '#c8c8c8'}}>
                            <EastIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="flex gap-8 mt-4 mb-4 overflow-hidden">
                    {items.map((item, index) => {
                        return(
                            <FoodItems
                                key={item.id}
                                url={item.url}
                                name={item.name}
                                slide={slide}
                            />
                        )
                    })}
                </div>
            </div>
            <div>
                <NearBy />
            </div>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
        </div>
    );
}