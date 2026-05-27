"use client";

import { useState } from "react";

export default function AdminPage() {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    mrp: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Product Saved ✅");

        setProduct({
          name: "",
          brand: "",
          category: "",
          price: "",
          mrp: "",
          description: "",
          image: "",
        });
      } else {
        alert(data.error || "Save failed");
      }
    } catch (error) {
      alert("Error saving product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          background: "white",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Admin Panel
        </h1>

        {[
          ["name", "Product Name"],
          ["brand", "Brand"],
          ["category", "Category"],
          ["price", "Price"],
          ["mrp", "MRP"],
          ["image", "Image URL"],
        ].map(([key, placeholder]) => (
          <input
            key={key}
            type="text"
            placeholder={placeholder}
            value={product[key]}
            onChange={(e) =>
              setProduct({
                ...product,
                [key]: e.target.value,
              })
            }
            style={{
              width: "100%",
              padding: "18px",
              marginBottom: "15px",
              borderRadius: "15px",
              border: "1px solid #ccc",
            }}
          />
        ))}

        <textarea
          placeholder="Description"
          value={product.description}
          onChange={(e) =>
            setProduct({
              ...product,
              description: e.target.value,
            })
          }
          style={{
            width: "100%",
            padding: "18px",
            height: "120px",
            marginBottom: "15px",
            borderRadius: "15px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleSave}
          disabled={loading}
          style={{
            width: "100%",
            background: "#0f766e",
            color: "white",
            padding: "18px",
            border: "none",
            borderRadius: "15px",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          {loading ? "Saving..." : "Save Product"}
        </button>
      </div>
    </main>
  );
}
