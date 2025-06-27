import React from "react";
import DirectionsIcon from '@mui/icons-material/Directions';

export default function DirectionButton() {
    return(
        <button className="mt-4 md:mt-0 flex items-center gap-2 bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            <DirectionsIcon />
            <span>Get Directions</span>
        </button>
    );
}