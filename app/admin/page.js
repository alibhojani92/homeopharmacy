"use client";
<button
  type="button"
  onClick={() => handleSave()}
  className="bg-teal-700 text-white w-full py-4 rounded-2xl font-bold text-lg cursor-pointer active:scale-95"
>
  {loading ? "Saving..." : "Save Product"}
</button>

import { useState } from "react";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState({
    name: "",
    brand: "SBL",
    category: "",
    price: "",
    mrp: "",
    description: "",
    image: "",
  });

  const handleSave = async () => {
    setLoading(true);

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const data = await res.json();

    setLoading(false);

    if (data.success) {
      alert("✅ Product Saved!");

      setProduct({
        name: "",
        brand: "SBL",
        category: "",
        price: "",
        mrp: "",
        description: "",
        image: "",
      });
    } else {
      alert("❌ Error saving product");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-5">
        <h1 className="text-3xl font-bold text-center mb-5">
          Admin Panel
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            value={product.name}
            onChange={(e) =>
              setProduct({
                ...product,
                name: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl border"
          />

          <input
            type="text"
            placeholder="Brand"
            value={product.brand}
            onChange={(e) =>
              setProduct({
                ...product,
                brand: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl border"
          />

          <input
            type="text"
            placeholder="Category"
            value={product.category}
            onChange={(e) =>
              setProduct({
                ...product,
                category: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl border"
          />

          <input
            type="number"
            placeholder="Price"
            value={product.price}
            onChange={(e) =>
              setProduct({
                ...product,
                price: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl border"
          />

          <input
            type="number"
            placeholder="MRP"
            value={product.mrp}
            onChange={(e) =>
              setProduct({
                ...product,
                mrp: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl border"
          />

          <textarea
            placeholder="Description"
            value={product.description}
            onChange={(e) =>
              setProduct({
                ...product,
                description: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl border h-32"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={product.image}
            onChange={(e) =>
              setProduct({
                ...product,
                image: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl border"
          />

          <button
            onClick={handleSave}
            className="bg-teal-700 text-white w-full py-4 rounded-2xl font-bold text-lg"
          >
            {loading ? "Saving..." : "Save Product"}
          </button>
        </div>
      </div>
    </main>
  );
}
