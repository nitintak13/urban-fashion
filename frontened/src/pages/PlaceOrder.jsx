import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContest";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between min-h-[80vh] border-t pt-5 sm:pt-14  gap-4">
      {/* left side  */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl my-3 sm:text-2xl">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            placeholder="First Name"
            className="border border-gray-300 w-full py-1.5 px-3.5 rounded"
            type="text"
          />
          <input
            placeholder="Last Name"
            className="border border-gray-300 w-full py-1.5 px-3.5 rounded"
            type="text"
          />
        </div>
        <input
          placeholder="Email"
          className="border border-gray-300 w-full py-1.5 px-3.5 rounded"
          type="email"
        />
        <input
          placeholder="Street"
          className="border border-gray-300 w-full py-1.5 px-3.5 rounded"
          type="text"
        />
        <div className="flex gap-3">
          <input
            placeholder="City"
            className="border border-gray-300 w-full py-1.5 px-3.5 rounded"
            type="text"
          />
          <input
            placeholder="State"
            className="border border-gray-300 w-full py-1.5 px-3.5 rounded"
            type="text"
          />
        </div>
        <div className="flex gap-3">
          <input
            placeholder="ZipCode"
            className="border border-gray-300 w-full py-1.5 px-3.5 rounded"
            type="number"
          />
          <input
            placeholder="Country"
            className="border border-gray-300 w-full py-1.5 px-3.5 rounded"
            type="text"
          />
        </div>
        <input
          placeholder="Phone"
          className="border border-gray-300 w-full py-1.5 px-3.5 rounded"
          type="number"
        />
      </div>
      {/* right side  */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHODS"} />
          <div className="flex flex-col lg:flex-row gap-3">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center cursor-pointer gap-3 p-2 px-3  border"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-500" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center cursor-pointer gap-3 p-2 px-3  border"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-500" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center cursor-pointer gap-3 p-2 px-3  border"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-500" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate("/orders")}
              className="bg-black text-sm text-white px-16 py-3"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
