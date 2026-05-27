"use client";

import Image from "next/image";

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">

      {/* Product Card */}
      <div className="bg-white rounded-3xl shadow-lg p-5">

        {/* Product Image */}
        <div className="bg-white rounded-3xl p-4 flex justify-center">
          <Image
            src="/medicines/nux.webp"
            alt="Nux Vomica"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="mt-5">
          <p className="text-gray-500">
            SBL
          </p>

          <h1 className="text-3xl font-bold">
            Nux Vomica 30
          </h1>

          {/* Price */}
          <div className="flex items-center gap-3 mt-3">
            <span className="text-3xl font-bold text-green-700">
              ₹99
            </span>

            <span className="line-through text-gray-400 text-lg">
              ₹130
            </span>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
              25% OFF
            </span>
          </div>

          {/* Potency */}
          <div className="mt-5">
            <h2 className="font-semibold mb-2">
              Select Potency
            </h2>

            <div className="flex gap-3 flex-wrap">
              {["30", "200", "1M", "Q"].map((potency) => (
                <button
                  key={potency}
                  className="border border-teal-700 text-teal-700 px-4 py-2 rounded-2xl font-semibold"
                >
                  {potency}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mt-
