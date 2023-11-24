import React, { useState } from "react";
//import {useState}
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  //setting up the current state of the selectedCategory - it is default set to "All" to display all categories
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  // this function is set to the variable handleCategoryChange. it targets the event (e) and updates the setSelectedCategory

  const itemsToDisplay =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);
  //this statement sets the variable "itemsToDisplay" to be set to the current value of selected category. if the category is set to default, it displays all the categories, if it's not, then it's set to display the selected category
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          {/* this has been modified to include the eventHandler onChange, and calls the function handleCategoryChange */}
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          // this has been updated to use the itemsToDisplay variable instead of all the items
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
