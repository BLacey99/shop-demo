import express from "express";
import { createProduct, deleteProduct, getProducts, updatedProduct } from "../controllers/product.controller.js";

const router = express.Router();


// Returns all products
router.get("/", getProducts);
// Creates product
router.post("/", createProduct);
// Update entire product document
router.put("/:id", updatedProduct);
// Delete product
router.delete("/:id", deleteProduct);

export default router;