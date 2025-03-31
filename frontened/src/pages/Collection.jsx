import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContest";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };
  // const applyFilter = () => {
  //   let productsCopy = products.slice();
  //   if (category.length > 0) {
  //     productsCopy = productsCopy.filter((item) =>
  //       category.includes(item.category)
  //     );
  //   }
  //   if (subCategory.length > 0) {
  //     productsCopy = productsCopy.filter((item) =>
  //       subCategory.includes(item.subCategory)
  //     );
  //   }
  //   setFilterProduct(productsCopy);
  // };
  // const sortProduct = () => {
  //   let fpCopy = filterProduct.slice();
  //   switch (sortType) {
  //     case "low-high":
  //       setFilterProduct(fpCopy.sort((a, b) => a.price - b.price));
  //       break;
  //     case "high-low":
  //       setFilterProduct(fpCopy.sort((a, b) => b.price - a.price));
  //       break;
  //     default:
  //       applyFilter();
  //       break;
  //   }
  // };
  const sortAndFilterProducts = () => {
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (sortType === "low-high") {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      productsCopy.sort((a, b) => b.price - a.price);
    }
    setFilterProduct(productsCopy);
  };
  useEffect(() => {
    sortAndFilterProducts();
  }, [category, subCategory, search, showSearch, sortType, products]);
  // useEffect(() => {
  //   applyFilter();
  //   sortProduct();
  // }, [category, subCategory]);
  // useEffect(() => {
  //   sortProduct();
  //   // applyFilter();
  // }, [sortType]);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter options */}
      <div className="min-w-60">
        <div
          onClick={() => setShowFilter(!showFilter)}
          className="min-w-60 flex flex-row gap-2"
        >
          <p className=" text-xl flex items-center cursor-pointer gap-2">
            FILTERS
          </p>
          <img
            className={`h-3 sm:hidden my-2 ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </div>

        <div className={`pl-5 mt-6 py-3 border border-gray-300 `}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleCategory}
                value={"Men"}
              />{" "}
              MEN
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleCategory}
                value={"Women"}
              />{" "}
              WOMEN
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleCategory}
                value={"Kids"}
              />{" "}
              KIDS
            </p>
          </div>
        </div>
        <div className={`pl-5 my-5 py-3 border border-gray-300 `}>
          <p className="mb-3 text-sm font-medium">TYPES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleSubCategory}
                value={"Topwear"}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleSubCategory}
                value={"Bottomwear"}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleSubCategory}
                value={"Winterwear"}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* right side
       */}
      <div className="flex-1">
        <div className="flex justify-between text-base mb-4 sm:text-2xl">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* product sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-200 text-sm px-2 "
          >
            <option value="relevant">Sort by:Relevant</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProduct.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
