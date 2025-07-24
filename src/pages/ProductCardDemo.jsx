import React, { useState } from "react";
import { Navbar, Footer } from "../components";
import ProductCard from "../components/ProductCard";
import "./ProductCardDemo.css";

const ProductCardDemo = () => {
  // Test data with various scenarios
  const testProducts = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      price: 199.99,
      stock: 15,
      variants: [
        { id: "v1", name: "Black", price: 199.99 },
        { id: "v2", name: "White", price: 199.99 },
        { id: "v3", name: "Limited Edition Gold", price: 249.99 },
      ],
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      price: 299.99,
      stock: 0, // Out of stock
      variants: [
        { id: "v1", name: "42mm", price: 299.99 },
        { id: "v2", name: "46mm", price: 349.99 },
      ],
    },
    {
      id: 3,
      title: "Organic Cotton T-Shirt",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      price: 29.99,
      stock: 50,
      variants: [
        { id: "v1", name: "Small", price: 29.99 },
        { id: "v2", name: "Medium", price: 29.99 },
        { id: "v3", name: "Large", price: 29.99 },
        { id: "v4", name: "XL", price: 32.99 },
      ],
    },
    {
      id: 4,
      title: "Professional Camera Lens",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
      price: 899.99,
      stock: 8,
      variants: [
        { id: "v1", name: "50mm f/1.8", price: 899.99 },
        { id: "v2", name: "85mm f/1.4", price: 1299.99 },
        { id: "v3", name: "24-70mm f/2.8", price: 1899.99 },
      ],
    },
    {
      id: 5,
      title: "Designer Leather Bag",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
      price: 159.99,
      stock: 25,
      variants: [
        { id: "v1", name: "Brown", price: 159.99 },
        { id: "v2", name: "Black", price: 159.99 },
        { id: "v3", name: "Tan", price: 159.99 },
      ],
    },
    {
      id: 6,
      title: "Gaming Laptop",
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
      price: 1299.99,
      stock: 0, // Out of stock
      variants: [
        { id: "v1", name: "RTX 3060", price: 1299.99 },
        { id: "v2", name: "RTX 3070", price: 1499.99 },
        { id: "v3", name: "RTX 3080", price: 1899.99 },
      ],
    },
    {
      id: 7,
      title: "Wireless Bluetooth Speaker",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      price: 79.99,
      stock: 30,
      variants: [
        { id: "v1", name: "Portable", price: 79.99 },
        { id: "v2", name: "Waterproof", price: 99.99 },
        { id: "v3", name: "Premium", price: 149.99 },
      ],
    },
    {
      id: 8,
      title: "Smart Home Security Camera",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      price: 129.99,
      stock: 12,
      variants: [
        { id: "v1", name: "Indoor", price: 129.99 },
        { id: "v2", name: "Outdoor", price: 179.99 },
        { id: "v3", name: "Pan & Tilt", price: 199.99 },
      ],
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? testProducts
      : testProducts.filter((product) => {
          if (filter === "in-stock") return product.stock > 0;
          if (filter === "out-of-stock") return product.stock === 0;
          return true;
        });

  return (
    <>
      <Navbar />
      <div className="demo-container">
        <div className="demo-header">
          <h1>Product Card Component Demo</h1>
          <p>
            A responsive, modern product card component with variants and stock
            management
          </p>

          <div className="demo-filters">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Products ({testProducts.length})
            </button>
            <button
              className={`filter-btn ${filter === "in-stock" ? "active" : ""}`}
              onClick={() => setFilter("in-stock")}
            >
              In Stock ({testProducts.filter((p) => p.stock > 0).length})
            </button>
            <button
              className={`filter-btn ${
                filter === "out-of-stock" ? "active" : ""
              }`}
              onClick={() => setFilter("out-of-stock")}
            >
              Out of Stock ({testProducts.filter((p) => p.stock === 0).length})
            </button>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variants={product.variants}
            />
          ))}
        </div>

        <div className="demo-features">
          <h2>Component Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fa fa-mobile"></i>
              <h3>Responsive Design</h3>
              <p>
                Adapts seamlessly to desktop, tablet, and mobile devices with
                CSS Grid and media queries.
              </p>
            </div>
            <div className="feature-card">
              <i className="fa fa-palette"></i>
              <h3>Modern UI/UX</h3>
              <p>
                Clean, modern design with hover effects, smooth transitions, and
                intuitive user interactions.
              </p>
            </div>
            <div className="feature-card">
              <i className="fa fa-cubes"></i>
              <h3>Variant Support</h3>
              <p>
                Dropdown selector for product variants with dynamic pricing and
                availability.
              </p>
            </div>
            <div className="feature-card">
              <i className="fa fa-exclamation-triangle"></i>
              <h3>Stock Management</h3>
              <p>
                Automatic handling of out-of-stock products with visual
                indicators and disabled actions.
              </p>
            </div>
            <div className="feature-card">
              <i className="fa fa-shopping-cart"></i>
              <h3>Cart Integration</h3>
              <p>
                Seamless integration with Redux store for cart functionality and
                toast notifications.
              </p>
            </div>
            <div className="feature-card">
              <i className="fa fa-link"></i>
              <h3>Navigation</h3>
              <p>
                Direct links to product detail pages and hover overlay for quick
                access.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductCardDemo;
