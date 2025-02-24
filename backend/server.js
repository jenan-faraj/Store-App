
const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');
app.use(cors());


app.get('/api/products', async (req, res) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        res.json(products);
      } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})