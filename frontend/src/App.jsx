import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:9000/products");
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products, please try again later.");
      }
    }

    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Products 🛒
      </h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {product.title}
              </h2>
              <p className="text-lg text-gray-600 mt-2">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
