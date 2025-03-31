import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContest";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"PRODUCTS"} />
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className=" py-4 border-t border-b text-gray-700 
            flex flex-col md:flex-row  md:justify-between
            gap-4"
          >
            <div className=" md:min-w-full flex flex-col sm:flex-row items-start text-sm gap-6">
              <img
                src={item.image[0]}
                className="w-16 sm:w-20
               "
                alt=""
              />
              <div className=" sm:min-w-[700px]">
                <p className="sm:text-base text-sm font-medium">{item.name}</p>
                <div className="flex flex-row items-center gap-3 mt-2 text-base text-gray-600">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-600">25 Jul 2024</span>
                </p>
              </div>
              <div className="md:w-1/2  flex items-center justify-between">
                <div className="flex items-center gap-2 ">
                  <p className="min-w-2 h-2 rounded-full bg-green-400"></p>
                  <p className=" text-sm md:text-base">Ready To Ship</p>
                </div>
                <button className="mx-14 sm:mx-0 border text-sm font-medium rounded-sm px-4 py-2 border-radius">
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
