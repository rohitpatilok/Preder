import React from "react";

export default function FoodItems(props) {
  return (
    <a
      href=""
      className="flex flex-col items-center gap-2 shrink-0 grow-0"
      style={{ transform: `translateX(-${props.slide * 100}%)` }}
    >
      <img
        className="rounded-full w-[124px] h-[124px] object-cover shadow-md border-2 border-gray-200 hover:shadow-xl"
        src={props.url}
        alt={props.name}
      />
      <p className="text-gray-600 font-medium">{props.name}</p>
    </a>
  );
}
