import React from "react";
import Rating from '@mui/material/Rating';

export default function Restaurants(props){
    return(
            <a
                className="w-full md:w-[22%] lg:shrink-0 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 bg-white dark:bg-gray-800"
                href=""
            >
                <img
                    className="w-full h-40 md:h-36 rounded-t-2xl object-cover"
                    src={props.image}
                    alt={props.name}
                />
                <div className="flex flex-col gap-2 p-3">
                    <div className="flex items-center">
                        <h2 className="text-base font-semibold text-black dark:text-white">{props.name}</h2>
                    </div>
                    <p className="text-sm line-clamp-3 text-gray-600 dark:text-gray-400">{props.address}</p>
                    <div className="flex justify-between">
                        <Rating
                            name="size-small"
                            readOnly
                            value={props.rating}
                            precision={0.5}
                            size="small"
                        />
                        <p className="text-sm text-gray-500">{props.timing}</p>
                    </div>
                </div>
            </a>
    );
}