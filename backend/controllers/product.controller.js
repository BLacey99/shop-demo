import Product from '../models/product.model.js';
import mongoose from 'mongoose';


// Returns all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).send({ success: true, message: "Products fetched", data: products });
    } catch (error) {
        res.status(500).send({ success: false, message: "Error in fetching products", error });
    }
}
// Creates product
export const createProduct = async (req, res) => {
    const product = req.body; //User sent data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).send({ success: false, message: "Please enter all fields" });
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).send({ success: true, message: "Product created", data: newProduct });
    } catch (error) {
        res.status(500).send({ success: false, message: "Error in creating product", error });
    }
}

// Update entire product document
export const updatedProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send({ success: false, message: "Product not found" });
    }
    
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
       
        res.status(200).send({ success: true, message: "Product updated", data: updatedProduct });
    } catch (error) {
        res.status(500).send({ success: false, message: "Error in updating product", error });
    }

};

// Delete product
export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).send({ success: false, message: "Please enter all fields" });
    }

    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).send({ success: false, message: "Product not found" });
        }
        res.status(200).send({ success: true, message: "Product deleted", data: product });
    } catch (error) {
        res.status(500).send({ success: false, message: "Error in deleting product", error });
    }

};