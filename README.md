# 🛍️ E-commerce Product Card Component

A modern, responsive Product Card component implementation for React applications. Built as part of a technical assessment for Senior MERN Stack Developer position.

## 🎯 Live Demo

**Demo URL:** [http://localhost:3000/demo](http://localhost:3000/demo) (after running locally)

## ✨ Features

### Core Requirements ✅

- **Product Image**: High-quality display with hover effects
- **Product Name**: Truncated titles with navigation links
- **Product Price**: Dynamic pricing with variant support
- **Variant Dropdown**: Selector for different product options
- **Add to Cart Button**: Functional Redux integration
- **Out of Stock Handling**: Visual indicators and disabled states

### Enhanced Features 🚀

- **Responsive Design**: Mobile-first approach with CSS Grid
- **Modern UI/UX**: Clean design with smooth animations
- **Hover Effects**: Interactive elements with transitions
- **Toast Notifications**: User feedback for actions
- **Product Detail Pages**: Comprehensive product information
- **Stock Management**: Real-time availability tracking

## 🛠️ Technology Stack

- **Frontend**: React.js 18.2.0
- **State Management**: Redux Toolkit
- **Styling**: CSS3 with Grid & Flexbox
- **Routing**: React Router DOM
- **UI Components**: Custom components with modern design
- **Notifications**: React Hot Toast
- **Icons**: Font Awesome

## 📱 Responsive Design

- **Desktop**: 3-4 cards per row
- **Tablet**: 2-3 cards per row
- **Mobile**: 1 card per row
- **Touch-Friendly**: Minimum 44px touch targets

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hafizmuhammadzeshan/ecommerce-product-card-demo.git
   cd ecommerce-product-card-demo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **View the demo**
   - Open [http://localhost:3000/demo](http://localhost:3000/demo)
   - Navigate to product detail pages: `/demo-product/:id`

## 📁 Project Structure

```
src/
├── components/
│   ├── ProductCard.jsx          # Main component
│   ├── ProductCard.css          # Component styles
│   └── index.js                 # Component exports
├── pages/
│   ├── ProductCardDemo.jsx      # Demo page with test data
│   ├── ProductCardDemo.css      # Demo page styles
│   ├── DemoProductDetail.jsx    # Product detail page
│   ├── DemoProductDetail.css    # Detail page styles
│   └── index.js                 # Page exports
└── index.js                     # Main app with routing
```

## 🎨 Component Usage

```jsx
import ProductCard from "./components/ProductCard";

const product = {
  id: 1,
  title: "Premium Wireless Headphones",
  image: "product-image-url",
  price: 199.99,
  stock: 15,
};

const variants = [
  { id: "v1", name: "Black", price: 199.99 },
  { id: "v2", name: "White", price: 199.99 },
  { id: "v3", name: "Gold", price: 249.99 },
];

<ProductCard product={product} variants={variants} />;
```

## 🧪 Test Data

The demo includes 8 sample products with various scenarios:

- **In-stock products** with multiple variants
- **Out-of-stock products** with visual indicators
- **Different price ranges** and categories
- **Variant pricing** (some variants cost more)

## 🎯 Demo Features

### Product Listing (`/demo`)

- **Filter Options**: All, In Stock, Out of Stock
- **Interactive Cards**: Hover effects and animations
- **Variant Selection**: Dropdown with price updates
- **Add to Cart**: Redux integration with notifications

### Product Details (`/demo-product/:id`)

- **High-quality Images**: Responsive product photos
- **Detailed Descriptions**: Comprehensive product info
- **Variant Selection**: Dynamic pricing updates
- **Quantity Controls**: Stock validation
- **Rating Display**: Star ratings with reviews
- **Action Buttons**: Add to cart and view cart

## 🔧 Technical Implementation

### Layout Approach

- **CSS Grid**: Responsive card layout with `auto-fill`
- **Flexbox**: Internal component alignment
- **Mobile-First**: Progressive enhancement

### State Management

- **Redux Integration**: Seamless cart functionality
- **Local State**: Variant selection and hover states
- **Toast Notifications**: User feedback

### Performance

- **CSS Transitions**: Hardware-accelerated animations
- **Optimized Images**: Proper sizing and loading
- **Minimal Re-renders**: Efficient state management

## 📸 Screenshots

### Desktop View

![Desktop Demo](screenshots/desktop-demo.png)

### Mobile View

![Mobile Demo](screenshots/mobile-demo.png)

### Product Detail

![Product Detail](screenshots/product-detail.png)

## 🌟 Key Highlights

### Design Excellence

- **Modern UI/UX**: Clean, professional design
- **Smooth Animations**: 60fps transitions
- **Accessibility**: Proper focus states and semantic HTML
- **Visual Feedback**: Hover states and loading indicators

### Code Quality

- **Clean Architecture**: Modular component structure
- **Best Practices**: Modern React patterns
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized for speed and efficiency

### User Experience

- **Intuitive Navigation**: Clear product flow
- **Visual Hierarchy**: Proper information architecture
- **Interactive Elements**: Engaging user interactions
- **Error Handling**: Graceful fallbacks and validation

## 🔮 Future Enhancements

- Image lazy loading
- Skeleton loading states
- Wishlist functionality
- Quick view modal
- Product comparison
- Social sharing buttons
- Advanced filtering
- Search functionality

## 📞 Contact

**Developer:** Hafiz Muhammad Zeshan Akram  
**Email:** [Add your email here]  
**LinkedIn:** [Add your LinkedIn URL here]  
**GitHub:** [Add your GitHub URL here]

---

## 📄 License

This project is created as part of a technical assessment. Feel free to use the code for learning purposes.

---

**Built with ❤️ using React.js**
