import React from "react";
import styles from "./Kitchen.module.scss";

import KitchenOrderTabel from "../../features/KitchenOrderTabel/KitchenOrderTabel";

const demoContent = [
  {
    id: "1",
    type: "local",
    destination: "1",
    status: "ordered",
    starter: [
      { times: 1, size: "small", food: "soup" },
      { times: 1, size: "medium", food: "prawns" },
    ],
    main: [
      { times: 1, size: "medium", food: "fish" },
      { times: 2, size: "small", food: "chips" },
    ],
    dessert: [{ times: 1, size: "large", food: "brownie" }],
  },
  {
    id: "2",
    type: "remote",
    destination: "st. Avenue 23, Oxford",
    status: "ordered",
    starter: [{ times: 1, size: "large", food: "pate" }],
    main: [
      { times: 1, size: "large", food: "steak" },
      { times: 1, size: "medium", food: "potatoes" },
    ],
    dessert: [{ times: 2, size: "medium", food: "strawberry ice cream" }],
  },
  {
    id: "3",
    type: "local",
    destination: "2",
    status: "ordered",
    starter: [{ times: 1, size: "large", food: "chicken liver" }],
    main: [{ times: 1, size: "medium", food: "spaghetti" }],
    dessert: [],
  },
  {
    id: "4",
    type: "remote",
    destination: "st. Church 11, Didcot",
    status: "ordered",
    starter: [],
    main: [
      { times: 1, size: "medium", food: "Italiana pizza" },
      { times: 3, size: "small", food: "garlic sauce" },
    ],
    dessert: [],
  },
];

const Kitchen = () => {
  return (
    <div className={styles.component}>
      {demoContent.map((data) => (
        <KitchenOrderTabel data={data} key={data.id} />
      ))}
    </div>
  );
};

export default Kitchen;
