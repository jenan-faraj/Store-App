const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 9000;

app.use(cors());
app.use(express.json());

const url = "https://fakestoreapi.com/products";

app.get("/products", async (req, res) => {
  try {
    const response = await axios.get(url);

    // المنتج الجديد المضاف يدويًا
    const newProduct = {
      id: 100, // ID مختلف
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    };

    // دمج المنتج الجديد مع المنتجات القادمة من API
    const allProducts = [newProduct, ...response.data];

    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
