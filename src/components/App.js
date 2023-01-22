import React, { useState } from "react";

import RecipeList from "./RecipeList";
import "../css/styles.css";
import { v4 as uuidv4 } from "uuid";

export const RecipeContext = React.createContext();

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  };

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instructions...",
      ingredients: [
        {
          id: uuidv4(),
          name: "Name",
          amount: "1 Tbs"
        }
      ]
    };

    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:25",
    instructions:
      "1. Put the salt on the chicken.\n2.Put the chicken in the oven.\n3.Eat the chicken.",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds"
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs"
      }
    ]
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "1:45",
    instructions: "1. Put the paprika on the pork.\n2.Put the pork in the oven.\n3.Eat the pork.",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 Pounds"
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbs"
      }
    ]
  }
];

export default App;

