const express = require("express");
const {
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/product.controller.js");

const authBearer = require("../middlewares/auth.middleware.js"); // FIXED

const router = express.Router();

// Endpoint tanpa proteksi
router.get("/", getAllProduct);
router.get("/:id", getProductById);

// Endpoint terproteksi JWT
router.post("/", authBearer, createProduct);
router.put("/:id", authBearer, updateProduct);
router.delete("/:id", authBearer, deleteProduct);

module.exports = router;
