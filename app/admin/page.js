"use client";

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

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await res.json();

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
        alert("❌ Failed");
      }
    } catch (error) {
      alert("❌ Error");
    }

    setLoading(false);
  };

console.log("Admin loaded");
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

<div style={{ marginTop: "20px" }}>
<input
  type="button"
  value="CLICK TEST"
  onClick={() => alert("WORKING")}
  style={{
    width: "100%",
    padding: "20px",
    background: "red",
    color: "white",
    fontSize: "20px"
  }}
/>
</div>
        </div>
      </div>
    </main>
  );
}
