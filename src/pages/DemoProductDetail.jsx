import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Navbar, Footer } from "../components";
import toast from "react-hot-toast";
import "./DemoProductDetail.css";

const DemoProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Demo product data (same as in ProductCardDemo)
  const demoProducts = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      price: 199.99,
      stock: 15,
      category: "Electronics",
      description:
        "Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for extended listening sessions. Perfect for music lovers and professionals alike.",
      rating: 4.8,
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
      stock: 0,
      category: "Electronics",
      description:
        "Track your fitness goals with precision using our advanced smart fitness watch. Monitor heart rate, sleep patterns, and activity levels with real-time data and personalized insights.",
      rating: 4.6,
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
      category: "Clothing",
      description:
        "Made from 100% organic cotton, this comfortable t-shirt is perfect for everyday wear. Breathable fabric, classic fit, and available in multiple sizes for ultimate comfort.",
      rating: 4.5,
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
      category: "Photography",
      description:
        "Capture stunning images with our professional-grade camera lens. Featuring advanced optics, fast autofocus, and weather-sealed construction for professional photographers.",
      rating: 4.9,
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
      category: "Fashion",
      description:
        "Crafted from premium leather, this designer bag combines style and functionality. Multiple compartments, adjustable strap, and timeless design make it perfect for any occasion.",
      rating: 4.7,
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
      stock: 0,
      category: "Electronics",
      description:
        "Powerful gaming laptop with high-performance graphics and fast processing. Perfect for gaming enthusiasts and content creators who demand the best performance.",
      rating: 4.8,
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
      category: "Electronics",
      description:
        "Portable wireless speaker with rich, immersive sound. Waterproof design, long battery life, and easy connectivity make it perfect for outdoor adventures and indoor entertainment.",
      rating: 4.4,
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
      category: "Home Security",
      description:
        "Keep your home safe with our smart security camera. HD video, night vision, motion detection, and mobile app control provide comprehensive home security.",
      rating: 4.6,
      variants: [
        { id: "v1", name: "Indoor", price: 129.99 },
        { id: "v2", name: "Outdoor", price: 179.99 },
        { id: "v3", name: "Pan & Tilt", price: 199.99 },
      ],
    },
  ];

  const product = demoProducts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (product && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  const addProduct = () => {
    const productToAdd = {
      ...product,
      selectedVariant: selectedVariant,
      finalPrice: selectedVariant ? selectedVariant.price : product.price,
      quantity: quantity,
    };
    dispatch(addCart(productToAdd));
    toast.success("Added to cart!");
  };

  const handleVariantChange = (e) => {
    const variant = product.variants.find((v) => v.id === e.target.value);
    setSelectedVariant(variant);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(Math.max(1, Math.min(newQuantity, product.stock)));
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container my-5">
          <div className="text-center">
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <Link to="/demo" className="btn btn-primary">
              Back to Demo
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const isInStock = product.stock > 0;
  const currentPrice = selectedVariant ? selectedVariant.price : product.price;

  return (
    <>
      <Navbar />
      <div className="demo-product-detail">
        <div className="container">
          <div className="product-detail-grid">
            {/* Product Image */}
            <div className="product-image-section">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                {!isInStock && (
                  <div className="out-of-stock-badge">Out of Stock</div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info-section">
              <div className="product-header">
                <span className="product-category">{product.category}</span>
                <h1 className="product-title">{product.title}</h1>
                <div className="product-rating">
                  <span className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fa fa-star ${
                          i < Math.floor(product.rating) ? "filled" : ""
                        }`}
                      />
                    ))}
                  </span>
                  <span className="rating-text">{product.rating}/5</span>
                </div>
              </div>

              <div className="product-price-section">
                {selectedVariant && selectedVariant.price !== product.price ? (
                  <div className="price-container">
                    <span className="original-price">${product.price}</span>
                    <span className="current-price">${currentPrice}</span>
                  </div>
                ) : (
                  <span className="current-price">${currentPrice}</span>
                )}
              </div>

              <div className="product-description">
                <p>{product.description}</p>
              </div>

              {/* Variant Selection */}
              {product.variants.length > 0 && (
                <div className="variant-section">
                  <label className="variant-label">Select Option:</label>
                  <select
                    className="variant-select"
                    value={selectedVariant?.id || ""}
                    onChange={handleVariantChange}
                    disabled={!isInStock}
                  >
                    {product.variants.map((variant) => (
                      <option key={variant.id} value={variant.id}>
                        {variant.name} - ${variant.price}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Quantity Selection */}
              <div className="quantity-section">
                <label className="quantity-label">Quantity:</label>
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={!isInStock}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="quantity-input"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                    max={product.stock}
                    disabled={!isInStock}
                  />
                  <button
                    className="quantity-btn"
                    onClick={() =>
                      setQuantity(Math.min(product.stock, quantity + 1))
                    }
                    disabled={!isInStock}
                  >
                    +
                  </button>
                </div>
                <span className="stock-info">
                  {isInStock ? `${product.stock} in stock` : "Out of stock"}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                {isInStock ? (
                  <>
                    <button className="add-to-cart-btn" onClick={addProduct}>
                      <i className="fa fa-shopping-cart"></i>
                      Add to Cart
                    </button>
                    <Link to="/cart" className="view-cart-btn">
                      <i className="fa fa-eye"></i>
                      View Cart
                    </Link>
                  </>
                ) : (
                  <button className="out-of-stock-btn" disabled>
                    <i className="fa fa-times"></i>
                    Out of Stock
                  </button>
                )}
              </div>

              {/* Back to Demo */}
              <div className="back-link">
                <Link to="/demo" className="back-btn">
                  <i className="fa fa-arrow-left"></i>
                  Back to Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DemoProductDetail;
