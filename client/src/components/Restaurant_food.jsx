import React, { useState } from "react";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Restaurant_food(){

    const [clicked, isClicked] = useState(false);
    const [item, setItem] = useState(0);

    function handleAddItem(){
        isClicked(true);
        setItem(1);
    }

    function handleIncrement(){
        setItem(prev => prev + 1);
    }

    function handleDecrement(){
        setItem(prev => {
            if (prev - 1 <= 0) {
                isClicked(false);
                return 0;
            }
            return prev - 1;
        });
    }

    return(
        <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 my-4">
            <div className="flex-1 pr-6 space-y-1">
                
                <div className="flex items-center gap-2">
                    <TrendingUpIcon className="text-amber-500" style={{ fontSize: '1.2rem' }} />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Korean & Thai Roll Chicken Meal
                    </h3>
                </div>

                <div className="flex items-center gap-1.5 pl-1">
                    <StarIcon className="text-yellow-600" style={{ fontSize: '1rem' }} />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">3.2</span>
                    <ScheduleIcon style={{ fontSize: '1rem' }} />
                    <span className="text-sm font-semibold text-gray-700">25min</span>
                </div>

                <div className="flex items-center gap-3 pl-1">
                    <span className="flex items-center text-lg font-bold text-gray-900 dark:text-white">
                        <CurrencyRupeeIcon style={{ fontSize: '1rem' }} />569
                    </span>
                    <span className="flex items-center text-sm text-gray-500 line-through">
                        <CurrencyRupeeIcon style={{ fontSize: '0.8rem' }} />799
                    </span>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 pt-2 pl-1">
                    Rs. 133 Off on Korean Tangy Roll & Thai Spicy Roll, Large Popcorn, Large Fries & Pepsi PET 475ml
                </p>
            </div>

            <div className="flex flex-col items-center flex-shrink-0 w-40 space-y-2">
                <div className="relative w-full h-28">
                    <img
                        className="w-full h-full object-cover rounded-xl"
                        src="/burger.avif"
                        alt="Korean & Thai Roll Chicken Meal"
                    />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4">
                        {!clicked ? (
                            <button
                                onClick={handleAddItem}
                                className="w-full bg-white text-green-600 cursor-pointer font-bold py-1.5 rounded-lg shadow-lg border border-gray-200 hover:bg-green-50 transition-all duration-200"
                            >
                                ADD
                            </button>
                        ) : (
                            <ButtonGroup variant="contained" aria-label="Basic button group" size="small" className="w-full shadow-lg">
                                <Button onClick={handleDecrement} className=" !bg-white !text-green-600 !font-bold !w-1/3 hover:!bg-red-50">
                                    <RemoveIcon fontSize="small" />
                                </Button>
                                <Button disabled className="!bg-white !text-green-600 !font-bold !w-1/3">{item}</Button>
                                <Button onClick={handleIncrement} className="!bg-white !text-green-600 !font-bold !w-1/3 hover:!bg-green-50">
                                    <AddIcon fontSize="small" />
                                </Button>
                            </ButtonGroup>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}