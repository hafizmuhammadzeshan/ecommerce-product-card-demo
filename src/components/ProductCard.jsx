import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./ProductCard.css";

const ProductCard = ({ product, variants = [] }) => {
  const [selectedVariant, setSelectedVariant] = useState(variants[0] || null);
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();

  // Check if product is in stock
  const isInStock = product.stock > 0;

  const addProduct = () => {
    const productToAdd = {
      ...product,
      selectedVariant: selectedVariant,
      finalPrice: selectedVariant ? selectedVariant.price : product.price,
    };
    dispatch(addCart(productToAdd));
    toast.success("Added to cart!");
  };

  const handleVariantChange = (e) => {
    const variant = variants.find((v) => v.id === e.target.value);
    setSelectedVariant(variant);
  };

  return (
    <div
      className={`product-card ${!isInStock ? "out-of-stock" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="product-card__image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__image"
        />
        {!isInStock && (
          <div className="product-card__out-of-stock-badge">Out of Stock</div>
        )}
        {isHovered && isInStock && (
          <div className="product-card__hover-overlay">
            <Link
              to={`/demo-product/${product.id}`}
              className="product-card__view-details-btn"
            >
              View Details
            </Link>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="product-card__content">
        {/* Product Name */}
        <h3 className="product-card__title">
          <Link to={`/demo-product/${product.id}`}>
            {product.title.length > 50
              ? `${product.title.substring(0, 50)}...`
              : product.title}
          </Link>
        </h3>

        {/* Product Price */}
        <div className="product-card__price-container">
          {selectedVariant && selectedVariant.price !== product.price ? (
            <>
              <span className="product-card__original-price">
                ${product.price}
              </span>
              <span className="product-card__price">
                ${selectedVariant.price}
              </span>
            </>
          ) : (
            <span className="product-card__price">${product.price}</span>
          )}
        </div>

        {/* Variant Dropdown */}
        {variants.length > 0 && (
          <div className="product-card__variant-container">
            <select
              className="product-card__variant-select"
              value={selectedVariant?.id || ""}
              onChange={handleVariantChange}
              disabled={!isInStock}
            >
              {variants.map((variant) => (
                <option key={variant.id} value={variant.id}>
                  {variant.name} - ${variant.price}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Add to Cart Button */}
        <div className="product-card__actions">
          {isInStock ? (
            <button
              className="product-card__add-to-cart-btn"
              onClick={addProduct}
              disabled={!isInStock}
            >
              <i className="fa fa-shopping-cart"></i>
              Add to Cart
            </button>
          ) : (
            <button className="product-card__out-of-stock-btn" disabled>
              <i className="fa fa-times"></i>
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
