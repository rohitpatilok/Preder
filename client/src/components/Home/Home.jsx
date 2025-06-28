import React, { useState } from "react";
import Navbar from "./Navbar";
import { items } from "./Items";
import FoodItems from "./FoodItems";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import IconButton from '@mui/material/IconButton';
import { hotels } from "./Restaurants/Rest";
import Restaurants from "./Restaurants/Restaurants";
import Footer from "../Footer/Footer";

export default function Home(){

    const [slide, setSlide] = useState(0);

    function handleNext(){
        setSlide(slide + 3);
    }

    function handlePrev(){
        setSlide(slide - 3);
    }

    return(
        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto flex flex-col max-w-7xl gap-10 px-4 sm:px-6 lg:px-8 py-6">
                <Navbar />
                <img className="h-[40vh] md:h-[60vh] w-full m-0 p-0 rounded-2xl object-cover" src="/banner.jpg" alt="Promotional banner for Preder food delivery" />
                
                {/* What's on your mind? Section */}
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">What's on your mind?</h1>
                        <div className="hidden md:flex items-center">
                            <IconButton onClick={handlePrev} style={{backgroundColor: '#EEEEEE', margin: '5px'}}>
                                <WestIcon sx={{ fontSize: 20 }} />
                            </IconButton>
                            <IconButton onClick={handleNext} style={{backgroundColor: '#c8c8c8'}}>
                                <EastIcon sx={{ fontSize: 20 }} />
                            </IconButton>
                        </div>
                    </div>
                    <div className="flex gap-6 md:gap-8 pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 overflow-x-auto">
                        {items.map((item) => (
                            <FoodItems
                                key={item.id}
                                url={item.url}
                                name={item.name}
                                slide={slide}
                            />
                        ))}
                    </div>
                </div>

                {/* Restaurants Near You Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Restaurants Near You</h2>
                    <div className="flex gap-4 md:gap-6 pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 overflow-x-auto">
                        {hotels.map((item) => (
                            <div key={item.id} className="w-72 md:w-80 flex-shrink-0">
                                <Restaurants
                                   image={item.image}
                                   name={item.name}
                                   rating={item.rating}
                                   address={item.address}
                                   timing={item.timing}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* All Restaurants Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">All restaurants in Bengaluru</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {hotels.map((item) => (
                            <Restaurants
                               key={item.id}
                               image={item.image}
                               name={item.name}
                               rating={item.rating}
                               address={item.address}
                               timing={item.timing}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}