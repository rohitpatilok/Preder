import React from "react";

export default function FoodItems(props) {
  return (
    <a
      href=""
      className="flex flex-col items-center gap-2 shrink-0 grow-0 transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${props.slide * 100}%)` }}
    >
      <img
        className="rounded-full w-28 h-28 md:w-32 md:h-32 object-cover shadow-md border-2 border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-200"
        src={props.url}
        alt={props.name}
      />
      <p className="text-sm md:text-base text-gray-600 font-medium text-center">
        {props.name}
      </p>
    </a>
  );
}
