import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./header";
import Footer from "./footer";
import CoffeeBeans from "../assets/coffee-beans.png";

const menuItemsLeft = [
  { name: "Espresso", price: "₹150/-", img: require("../assets/menu1.jpg") },
  { name: "Latte", price: "₹200/-", img: require("../assets/menu2.jpg") },
  {
    name: "Croissant",
    price: "₹150/-",
    img: require("../assets/menu3.jpg"),
  },
  {
    name: "Blueberry Muffin",
    price: "₹200/-",
    img: require("../assets/menu4.jpg"),
  },
  { name: "Mocha", price: "₹250/-", img: require("../assets/menu5.jpg") },
  { name: "Affogato", price: "₹300/-", img: require("../assets/menu6.jpg") },
  { name: "Cold Brew", price: "₹200/-", img: require("../assets/menu7.jpg") },
];

const menuItemsRight = [
  { name: "Chai Latte", price: "₹200/-", img: require("../assets/menu1.jpg") },
  {
    name: "Bagel with Cream Cheese",
    price: "₹150/-",
    img: require("../assets/menu2.jpg"),
  },
  {
    name: "Seasonal Special",
    price: "₹200/-",
    img: require("../assets/menu3.jpg"),
  },
  {
    name: "Matcha Latte",
    price: "₹300/-",
    img: require("../assets/menu4.jpg"),
  },
  {
    name: "Hot Chocolate",
    price: "₹250/-",
    img: require("../assets/menu5.jpg"),
  },
  {
    name: "Pastry of the Day",
    price: "₹100/-",
    img: require("../assets/menu6.jpg"),
  },
  {
    name: "Seasonal Blend Coffee",
    price: "₹200/-",
    img: require("../assets/menu7.jpg"),
  },
];

function Menu() {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  // Show selector after first Add to Cart
  const [showSelector, setShowSelector] = useState({});

  const handleShowSelector = (itemKey) => {
    setShowSelector((prev) => ({ ...prev, [itemKey]: true }));
    setQuantities((prev) => ({ ...prev, [itemKey]: 1 }));
  };

  // Helper to handle quantity change
  const handleQuantity = (itemKey, delta) => {
    setQuantities((prev) => {
      const currentQty = prev[itemKey] || 1;
      const newQty = currentQty + delta;
      if (newQty <= 0) {
        // Hide selector and reset quantity
        setShowSelector((showPrev) => ({ ...showPrev, [itemKey]: false }));
        return { ...prev, [itemKey]: 0 };
      }
      return { ...prev, [itemKey]: newQty };
    });
  };

  // Add to cart logic
  const handleAddToCart = (itemKey, item) => {
    const qty = quantities[itemKey] || 1;
    if (qty < 1) return; // Prevent adding zero quantity
    // Check if already in cart
    const exists = cart.find((c) => c.name === item.name);
    if (exists) {
      setCart((prev) =>
        prev.map((c) => (c.name === item.name ? { ...c, qty: c.qty + qty } : c))
      );
    } else {
      setCart((prev) => [...prev, { ...item, qty }]);
    }
    setQuantities((prev) => ({ ...prev, [itemKey]: 1 }));
    setShowSelector((prev) => ({ ...prev, [itemKey]: false }));
  };

  // Render menu item with add to cart and quantity
  const renderMenuItem = (item, idx, keyPrefix) => {
    const itemKey = `${keyPrefix}-${idx}`;
    const qty = quantities[itemKey] || 0;
    return (
      <li key={itemKey} className="d-flex flex-column align-items-center mb-4">
        <div className="d-flex align-items-center w-100">
          <img
            src={item.img}
            alt={item.name}
            style={{
              width: "180px",
              height: "120px",
              objectFit: "cover",
              marginRight: "12px",
              borderRadius: "10px",
              background: "#fff",
            }}
          />
          <span style={{ flex: 1 }}>
            {item.name} - {item.price}
          </span>
        </div>
        <div className="d-flex align-items-center mt-2">
          {!showSelector[itemKey] ? (
            <button
              className="btn btn-success btn-sm"
              onClick={() => handleShowSelector(itemKey)}
            >
              Add to Cart
            </button>
          ) : (
            <>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => handleQuantity(itemKey, -1)}
                disabled={qty <= 0 || !showSelector[itemKey] ? true : false}
              >
                -
              </button>
              <span className="mx-2">{qty}</span>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => handleQuantity(itemKey, 1)}
              >
                +
              </button>
              <button
                className="btn btn-success btn-sm ms-3"
                onClick={() => handleAddToCart(itemKey, item)}
              >
                Add to Cart
              </button>
            </>
          )}
        </div>
      </li>
    );
  };

  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: `url(${CoffeeBeans})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "20px",
          height: "350px",
        }}
      >
        <h1
          className="text-center display-2 p-5"
          style={{ color: "white", fontFamily: "playfair" }}
        >
          Our Menu
        </h1>
        <p
          style={{
            color: "white",
            fontSize: "1.4rem",
            fontFamily: "playfair",
            margin: "auto",
            textAlign: "start",
          }}
        >
          Welcome to our menu page! Here you can explore our delicious
          offerings, from freshly brewed coffee to delectable pastries. Enjoy
          your visit!
        </p>
      </div>
      <div style={{ backgroundColor: "#DEE8CE", padding: "20px" }}>
        <h2
          className="text-center display-5 p-5"
          style={{ fontFamily: "playfair" }}
        >
          Coffee Menu Highlights
        </h2>
        <div className="menu-highlights d-flex justify-content-around flex-wrap">
          <div>
            <ul
              className="list-unstyled text-center"
              style={{ fontSize: "1.4rem", fontFamily: "playfair" }}
            >
              {menuItemsLeft.map((item, idx) =>
                renderMenuItem(item, idx, "left")
              )}
            </ul>
          </div>
          <div>
            <ul
              className="list-unstyled text-center"
              style={{ fontSize: "1.4rem", fontFamily: "playfair" }}
            >
              {menuItemsRight.map((item, idx) =>
                renderMenuItem(item, idx, "right")
              )}
            </ul>
          </div>
        </div>
        {/* Cart Summary */}
        <div className="mt-5">
          <h4 className="mb-3">🛒 Cart</h4>
          {cart.length === 0 ? (
            <div className="text-muted">No items in cart.</div>
          ) : (
            <ul className="list-group">
              {cart.map((item, idx) => (
                <li
                  key={idx}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    {item.name} ({item.price})
                  </span>
                  <span className="badge bg-primary rounded-pill">
                    {item.qty}
                  </span>
                </li>
              ))}
              <button
                className="btn btn-primary"
                style={{ width: "200px", marginTop: "10px" }}
              >
                Buy Now
              </button>
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
