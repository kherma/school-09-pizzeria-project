import React from "react";
import styles from "./OrderNew.module.scss";

const demoMenu = {
  starters: [
    { id: 1, name: "prawns", price: 6 },
    { id: 2, name: "chicken liver", price: 8 },
    { id: 3, name: "pate", price: 7 },
    { id: 4, name: "sout of the day", price: 5 },
  ],
  mains: [
    { id: 5, name: "fish", price: 10 },
    {
      id: 6,
      name: "steak",
      price: 15,
      variant: ["rare", "medium-rare", "medium", "medium-rare", "well-done"],
    },
    { id: 7, name: "sphaghetti", price: 12 },
    { id: 8, name: "chicken", price: 10 },
  ],

  sides: [
    { id: 9, name: "chips", price: 3 },
    { id: 10, name: "potatoes", price: 3 },
    {
      id: 11,
      name: "sauce",
      price: 2,
      variant: ["tomato", "garlic", "mayonnaise", "ketchup"],
    },
  ],
  desserts: [
    { id: 12, name: "brownie", price: 5 },
    {
      id: 13,
      name: "ice cream",
      price: 4,
      variant: ["vanilla", "chocolate", "strawberry"],
    },
  ],
  options: [
    { id: 14, name: "small", modPrice: 0.5 },
    { id: 15, name: "medium", modPrice: 1 },
    { id: 16, name: "large", modPrice: 1.5 },
  ],
  pizza: [
    { id: 17, name: "Margarita", price: 10 },
    { id: 18, name: "Italiana", price: 12 },
    { id: 19, name: "Spicy", price: 15 },
    { id: 20, name: "Vege", price: 17 },
  ],
};

// Type: local / remote
// Destination: table / address
// Starters + price
// Mains / sides / Pizza + price
// Desserts + price
// Price

const OrderNew = () => {
  return (
    <div className={styles.component}>
      <h2>OrderNew View</h2>
    </div>
  );
};

export default OrderNew;
