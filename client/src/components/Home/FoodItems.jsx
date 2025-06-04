import React from "react";

export default function FoodItems(props){
    return(
        <a className="flex flex-col items-center gap-2 shrink-0 grow-0 duration-300" style={{transform: `translateX(-${props.slide * 100}%)`}} href="">
            <img className="rounded-full w-[124px] h-[124px]" src={props.url} alt="" />
            <p className="text-gray-600">{props.name}</p>
        </a>
    )
}