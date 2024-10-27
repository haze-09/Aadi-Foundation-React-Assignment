import React from "react";
import RecipeTitle from "./RecipeTitle";
import "./index.css";

const titles = ["mashed potatoes", "pizza", "Biryani"];

function App() {
  return (
    <article>
      <h1>Recipe Manager</h1>
      {titles.map((title) => (
        <RecipeTitle title={title} />
      ))}
    </article>
  );
}

export default App;
