"use client";

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const medicines = [
    {
      name: "Nux Vomica",
      potency: "30",
      brand: "SBL",
      price: 99,
      mrp: 130,
      image: "/medicines/nux.webp",
    },
    {
      name: "Rhus Tox",
      potency: "200",
      brand: "SBL",
      price: 119,
      mrp: 160,
      image: "/medicines/rhus.webp",
    },
    {
      name: "Arnica Montana",
      potency: "Q",
      brand: "SBL",
      price: 149,
      mrp: 190,
      image: "/medicines/arnica.webp",
    },
    {
      name: "Belladonna",
      potency: "30",
      brand: "SBL",
      price: 89,
      mrp: 120,
      image: "/medicines/belladonna.webp",
    },
  ];

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-teal-700 text-white p-4 rounded-b-[35px] shadow-lg">

        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full p-1">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              Shri Sainath
            </h1>
            <p className="text-teal-100 text-sm">
              Homoeopathic Pharmacy
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-5">
          <input
            type="text"
            placeholder="Search Homeopathic Medicines..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 rounded-2xl text-black bg-white outline-none"
          />
        </div>

        {/* Offer Banner */}
        <div className="mt-4 bg-white rounded-2xl p-4 shadow">
          <h2 className="text-teal-700 text-xl font-bold">
            🎉 Flat 25% OFF
          </h2>

          <p className="text-gray-600">
            On Homeopathic Medicines
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="p-5">
        <h2 className="text-3xl font-bold mb-4">
          Categories
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {[
            "Dilutions",
            "Mother Tincture",
            "Bio Combination",
            "Biochemic",
            "Hair Care",
            "Skin Care",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow text-center font-semibold text-lg"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Shop by Brand */}
      <div className="px-5 pb-5">
        <h2 className="text-3xl font-bold mb-4">
          Shop by Brand
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {[
            "SBL",
            "Wheezal",
            "Dr. Reckeweg",
            "Allen",
            "Bakson",
            "Haslab",
          ].map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-5 shadow text-center"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-full mx-auto mb-3 flex items-center justify-center text-teal-700 font-bold text-xl">
                {brand.charAt(0)}
              </div>

              <h3 className="font-semibold text-lg">
                {brand}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Medicines */}
      <div className="px-5 pb-24">
        <h2 className="text-3xl font-bold mb-4">
          Featured Medicines
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {filteredMedicines.map((medicine, index) => (
            <div
              key={index}
<Link
  href={`/product/${medicine.name.toLowerCase().replace(/\s+/g, "-")}`}
  key={index}
  className="bg-white rounded-3xl shadow-md p-3 relative block"
>
              <button className="absolute top-3 right-3 text-xl">
                🤍
              </button>

              <Image
                src={medicine.image}
                alt={medicine.name}
                width={200}
                height={200}
                className="rounded-2xl h-32 w-full object-contain bg-white p-2"
              />

              <p className="text-sm text-gray-500 mt-3">
                {medicine.brand}
              </p>

              <h3 className="font-bold text-lg leading-tight">
                {medicine.name} {medicine.potency}
              </h3>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-green-700 font-bold text-lg">
                  ₹{medicine.price}
                </span>

                <span className="line-through text-gray-400 text-sm">
                  ₹{medicine.mrp}
                </span>
              </div>

              <span className="inline-block mt-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                25% OFF
              </span>

              <button className="bg-teal-700 text-white w-full py-3 rounded-2xl mt-3 font-semibold">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
</Link>
      {/* Maintenance Notice */}
      <div className="px-5 pb-6">
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded-2xl text-center">
          🚧 Website is currently under development.
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg flex justify-around py-3">
        <button className="font-semibold text-teal-700">
          Home
        </button>

        <button className="font-semibold">
          Categories
        </button>

        <button className="font-semibold">
          Cart
        </button>

        <button className="font-semibold">
          Profile
        </button>
      </div>

    </main>
  );
}
