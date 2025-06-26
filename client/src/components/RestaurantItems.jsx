import React from "react";
import { Rating } from "@mui/material";
import Divider from '@mui/material/Divider';
import DirectionsIcon from '@mui/icons-material/Directions';
import Coupons from "./Coupons";
import { Search, Filter } from 'lucide-react';
import DirectionButton from "./DirectionButton";

export default function RestaurantItems(){
    return(
        <div className="max-w-[1000px] mx-auto my-8 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-white">
                        The Ultimate Food HUB
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        123 Culinary Street, Downtown, CA 90210
                    </p>
                    <div className="flex items-center space-x-2">
                        <Rating
                            name="size-small"
                            readOnly
                            value={4.5}
                            precision={0.5}
                            size="small"
                            sx={{ "& .MuiRating-iconFilled": { color: "#FFB400" } }}
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            4.5
                        </span>
                    </div>
                </div>
                <DirectionButton />
            </div>
            <div className="rounded-4xl">
                <h1 className="ml-6 mt-2 font-bold text-[1.17em]">Deals For You</h1>
                <div className="flex p-6 gap-8 flex-nowrap overflow-hidden">
                    <Coupons />
                    <Coupons />
                    <Coupons />
                    <Coupons />
                </div>
            </div>
        <div className="min-w-[1000px] mx-auto px-4 py-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search menu items..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
                    />
                </div>
                <button
                className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                    <Filter className="w-5 h-5" />
                    Filters
                </button>
            </div>
        </div>
    </div>
    );
}