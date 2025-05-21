"use client";

import Image from "next/image";
import { useState } from "react";
import { Star, Filter, ArrowUpDown, ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";
import productsData from "../data/products.json";

const categories = [
  "All Products",
  "Leather",
  "Minimalist",
  "Travel",
  "Eco-Friendly",
  "Security",
];

const sortOprions = [
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating-desc", label: "Highest Rated" },
  { value: "newest", label: "Newest First" },
];

export default function ProductsPage() {
  const [products, setProducts] = useState(productsData.products);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");
  const productsPerPage = 8;

  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "All Products" ||
        product.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating-desc":
          return b.rating - a.rating;
        default:
          return b.id - a.id;
      }
    });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const CurrentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[450px] w-full">
        <div className="absolute inset-0 bg-black/75 z-10">
          <Image
            src="/Assets/creater-img.png"
            alt="Our Products"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our Collection
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Категории — слева */}
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white border-primary"
                    : "bg-white border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Сортировка — справа */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {sortOprions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {CurrentProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden  shadow-sm hover:shadow-primary hover:shadow-xl/50  tramsition-all duration-300  cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.discount > 0 && (
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                )}
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start ">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">
                    {product.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1 justify-between">
                  <div className="flex gap-5">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <span className="text-sm text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="">
                    {product.discount > 0 && (
                      <span className="text-gray-400 line-through text-sm">
                        $
                        {(product.price * (1 + product.discount / 100)).toFixed(
                          2
                        )}
                      </span>
                    )}
                    <span className="text-primary font-bold text-xl">
                      ${product.price}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm line-clamp-2">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button className="w-full hover:scale-100 ">
                  <ShoppingBasket className=" text-white" />
                  <span className="text-sm">Add to Cart</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "bg-white border border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
