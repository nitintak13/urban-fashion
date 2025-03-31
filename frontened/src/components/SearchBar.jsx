import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContest";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, setShowSearch, showSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);
  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center h-4 gap-2 border rounded-full w-3/4 sm:w-1/2 py-5 px-2 my-5 mx-3  border-gray-400 py justify-center">
        <input
          type="text"
          className="flex-1 bg-inherit  rounded-full text-sm outline"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        src={assets.cross_icon}
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
