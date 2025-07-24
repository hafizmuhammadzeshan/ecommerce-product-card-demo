# Product Card Component - Front-End Developer Test

## Overview

This is a responsive Product Card component implementation for the e-commerce project. The component demonstrates modern UI/UX practices with full responsiveness, variant support, and stock management.

## Features Implemented

### ✅ Core Requirements

- **Product Image**: High-quality image display with hover effects
- **Product Name**: Truncated title with link to product details
- **Product Price**: Dynamic pricing with variant support
- **Variant Dropdown**: Selector for different product options (size, color, etc.)
- **Add to Cart Button**: Functional cart integration with Redux
- **Out of Stock Handling**: Visual indicators and disabled state for unavailable products

### 🎨 Design Features

- **Modern UI/UX**: Clean, card-based design with smooth animations
- **Responsive Design**: Mobile-first approach with CSS Grid
- **Hover Effects**: Interactive elements with smooth transitions
- **Visual Feedback**: Toast notifications and loading states
- **Accessibility**: Proper focus states and semantic HTML

### 📱 Responsive Breakpoints

- **Desktop**: 3-4 cards per row
- **Tablet**: 2-3 cards per row
- **Mobile**: 1 card per row

## File Structure

```
src/
├── components/
│   ├── ProductCard.jsx          # Main component
│   ├── ProductCard.css          # Component styles
│   └── index.js                 # Component exports
├── pages/
│   ├── ProductCardDemo.jsx      # Demo page with test data
│   ├── ProductCardDemo.css      # Demo page styles
│   └── index.js                 # Page exports
└── index.js                     # Main app with routing
```

## How to Run

1. **Install Dependencies**

   ```bash
   cd ecommerce
   npm install
   ```

2. **Start the Development Server**

   ```bash
   npm start
   ```

3. **View the Demo**
   - Open your browser to `http://localhost:3000`
   - Navigate to `/demo` to see the Product Card component in action

## Demo Features

The demo page (`/demo`) showcases:

- **8 Sample Products** with various scenarios:

  - Products with multiple variants
  - Out-of-stock products
  - Different price ranges
  - Various product categories

- **Filter Options**:

  - All Products
  - In Stock Only
  - Out of Stock Only

- **Interactive Features**:
  - Hover effects on cards
  - Variant selection with price updates
  - Add to cart functionality
  - Toast notifications
  - **View Details** - Links to dedicated product detail pages (`/demo-product/:id`)

## Product Detail Pages

Each product card links to a comprehensive product detail page that includes:

- High-quality product images
- Detailed product descriptions
- Variant selection with dynamic pricing
- Quantity selection with stock validation
- Add to cart functionality
- Responsive design for all devices

## Component Usage

```jsx
import ProductCard from "./components/ProductCard";

const product = {
  id: 1,
  title: "Product Name",
  image: "product-image-url",
  price: 99.99,
  stock: 10,
};

const variants = [
  { id: "v1", name: "Small", price: 99.99 },
  { id: "v2", name: "Medium", price: 99.99 },
  { id: "v3", name: "Large", price: 104.99 },
];

<ProductCard product={product} variants={variants} />;
```

## Technical Implementation

### Layout Approach

- **CSS Grid**: Used for responsive card layout with `auto-fill` and `minmax()`
- **Flexbox**: For internal card layout and content alignment
- **Mobile-First**: Progressive enhancement from mobile to desktop

### Responsiveness Considerations

- **Breakpoints**: 480px, 768px, and desktop
- **Image Scaling**: Responsive images with `object-fit: cover`
- **Typography**: Scalable font sizes using rem units
- **Touch Targets**: Minimum 44px for mobile interactions
- **Grid Adaptation**: Automatic column adjustment based on screen size

### State Management

- **Redux Integration**: Seamless cart functionality
- **Local State**: Variant selection and hover states
- **Toast Notifications**: User feedback for actions

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Optimizations

- **CSS Transitions**: Hardware-accelerated animations
- **Image Optimization**: Proper sizing and lazy loading ready
- **Minimal Re-renders**: Efficient state management
- **Responsive Images**: Appropriate image sizes for different screens

## Future Enhancements

- Image lazy loading
- Skeleton loading states
- Wishlist functionality
- Quick view modal
- Product comparison
- Social sharing buttons

---

## Demo Link

The working demo is available at: `http://localhost:3000/demo`

**Note**: This is a local development server. For production deployment, the component can be easily integrated into any React application with minimal configuration.
