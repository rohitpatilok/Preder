import React from "react";
import Restaurants from "./Restaurants/Restaurants";

export default function NearBy(){
    return(
        <div>
            <h2 className="text-[1.5em] mb-2">Restaurants near you</h2>
            <Restaurants />
        </div>
    );
}