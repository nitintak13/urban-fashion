//function for add product
import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModels.js";
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        try {
          let result = await cloudinary.uploader.upload(item.path, {
            resource_type: "image",
          });
          console.log("Upload successful:", result.secure_url);
          return result.secure_url;
        } catch (error) {
          console.log("Error uploading image at path:", item.path, error);
          return null;
        }
      })
    );

    imagesUrl = imagesUrl.filter((url) => url !== null);

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };
    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added " });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    const products = await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
