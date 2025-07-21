import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDetectLocation = () => {
    console.log("Detecting current location...");
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center h-16 gap-10 m-4">
        <a href="/" className="text-yellow-500 font-bold text-3xl">Preder</a>
        <div className="relative flex-grow max-w-xs mr-auto">
          <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <LocationOnIcon className="text-gray-500 mx-3" />
            <input
              onClick={toggleDropdown}
              type="text" 
              placeholder="Enter your location" 
              className="w-full h-12 bg-transparent focus:outline-none text-gray-800"
            />
          </div>
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20">
              <ul>
                <li>
                  <a 
                    href="#" 
                    onClick={handleDetectLocation}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <GpsFixedIcon className="text-yellow-500" />
                    <span className="font-semibold">Detect current location</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        
        <div className="flex items-center text-gray-700 font-semibold gap-1">
            <SearchOutlinedIcon />
            <a href="">Search</a>
        </div>
        <div className="flex items-center text-gray-700 font-semibold gap-1">
            <LocalOfferOutlinedIcon />
            <a href="">Discounts</a>
        </div>
        <a className="cursor-pointer font-semibold text-gray-700" href="">About Us</a>
        <div className="flex items-center gap-1 cursor-pointer text-gray-700">
            <PersonIcon />
            <button className="cursor-pointer font-semibold">Sign in</button>
        </div>
      </div>
      <hr className="border-gray-200" />
    </div>
  );
}
