import React from "react";
import Rating from '@mui/material/Rating';

export default function Restaurants(props){
    return(
            <a
                className="max-w-96 md:w-[22%] lg:shrink-0 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 bg-white dark:bg-gray-800 overflow-hidden group"
                href="#"
            >
                <img
                    className="w-full h-40 md:h-36 object-cover"
                    src={props.image}
                    alt={props.name}
                />
                <div className="flex flex-col gap-2 p-4">
                    <div className="flex items-center">
                        <h2 className="text-lg font-bold text-black dark:text-white truncate">{props.name}</h2>
                    </div>
                    <p className="text-sm line-clamp-3 text-gray-600 dark:text-gray-400 min-h-[3.75rem]">{props.address}</p>
                    <div className="flex justify-between items-center mt-1">
                        <Rating
                            name="size-small"
                            readOnly
                            value={props.rating}
                            precision={0.5}
                            size="small"
                            sx={{
                                "& .MuiRating-iconFilled": {
                                    color: "#FFB400",
                                },
                            }}
                        />
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{props.timing}</p>
                    </div>
                </div>
            </a>
    );
}