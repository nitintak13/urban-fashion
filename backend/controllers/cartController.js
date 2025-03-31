import userModel from "../models/userModel.js";
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    console.log("yeah fine");
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    await userModel.findByIdAndUpdate(userId, { cartData });
    console.log("added");
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// const updateCart = async (req, res) => {
//   try {
//     const { userId, itemId, size, quantity } = req.body;
//     const userData = await userModel.findById(userId);
//     let cartData = await userData.cartData;
//     if (quantity === 0) {
//       await userModel.findByIdAndDelete(userId, { cartData });
//       res.json({ success: true, message: "updated cart" });
//     }
//     cartData[itemId][size] = quantity;
//     await userModel.findByIdAndUpdate(userId, { cartData });
//     res.json({ success: true, message: "updated cart" });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = userData.cartData; // Assuming cartData is an object

    if (quantity === 0) {
      // Remove the specific size entry
      if (cartData[itemId]) {
        delete cartData[itemId][size];
        // If there are no more sizes for the item, remove the item itself
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
    } else {
      // Update the quantity if greater than 0
      if (cartData[itemId]) {
        cartData[itemId][size] = quantity;
      } else {
        // Optionally handle case where the item doesn't exist
        cartData[itemId] = { [size]: quantity };
      }
    }

    // Update the user's cart data
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Updated cart" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    res.json({ success: true, cartData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, getUserCart, updateCart };
