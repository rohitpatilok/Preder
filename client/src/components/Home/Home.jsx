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
    const [prevSlide, setPrevSlide] = useState(false);
    const [nextSlide, setNextSlide] = useState(false);

    function handlePrev(){
        if(slide === 3){
            setPrevSlide(false);
        }
        setNextSlide(false);
        setSlide(slide - 3);
    }

    function handleNext(){
        if(slide == 6){
            setNextSlide(true);
        }
        setPrevSlide(true);
        setSlide(slide + 3);
    }

    return(
        <div>
            <div className="mx-auto flex flex-col max-w-[1200px] gap-6">
            <Navbar />
            <img className="h-[80vh] w-full m-0 p-0 rounded-2xl" src="/banner.jpg" alt="" />
            <div className="ml-auto mr-auto">
                <div className="flex">
                    <h1 className="text-[1.5em] font-bold">Whats on your mind?</h1>
                    <div className="ml-auto">
                        <IconButton onClick={handlePrev} disabled={!prevSlide} style={{backgroundColor: '#EEEEEE', margin: '5px'}}>
                            <WestIcon sx={{ fontSize: 20 }} />
                        </IconButton>
                        <IconButton onClick={handleNext} disabled={nextSlide} style={{backgroundColor: '#c8c8c8'}}>
                            <EastIcon sx={{ fontSize: 20 }} />
                        </IconButton>
                    </div>
                </div>
                <div className="flex gap-8 mt-4 mb-4 overflow-hidden">
                    {items.map((item) => {
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
            <h2 className="text-[1.5em] font-bold">Restaurants Near You</h2>
            <div className="flex gap-4 justify-between overflow-hidden">
                {hotels.map((item) => {
                    return(
                        <Restaurants
                           key={item.id}
                           image={item.image}
                           name={item.name}
                           rating={item.rating}
                           address={item.address}
                           timing={item.timing}
                        />
                    )
                })}
            </div>
            <h2 className="text-[1.5em] font-bold">Restaurants in bengaluru</h2>
            <div className="flex gap-4 justify-between flex-wrap">
                {hotels.map((item) => {
                    return(
                        <Restaurants
                           key={item.id}
                           image={item.image}
                           name={item.name}
                           rating={item.rating}
                           address={item.address}
                           timing={item.timing}
                        />
                    )
                })}
            </div>
        </div>
        <div className="mt-10">
            <Footer />
        </div>
        </div>
    );
}