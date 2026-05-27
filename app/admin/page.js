"use client";

import { useState } from "react";

export default function AdminPage() {
  const [product, setProduct] = useState({
    name: "",
    brand: "SBL",
    category: "",
    price: "",
    mrp: "",
    description: "",
    image: "",
  });

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
            className="w-full p-4 rounded-2xl border"
          />

          <input
            type="text"
            placeholder="Brand (SBL)"
            className="w-full p-4 rounded-2xl border"
          />

          <input
            type="text"
            placeholder="Category"
            className="w-full p-4 rounded-2xl border"
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full p-4 rounded-2xl border"
          />

          <input
            type="number"
            placeholder="MRP"
            className="w-full p-4 rounded-2xl border"
          />

          <textarea
            placeholder="Description"
            className="w-full p-4 rounded-2xl border h-32"
          />

          <input
            type="file"
            className="w-full p-4 rounded-2xl border"
          />

          <button className="bg-teal-700 text-white w-full py-4 rounded-2xl font-bold text-lg">
            Save Product
          </button>
        </div>
      </div>
    </main>
  );
}
