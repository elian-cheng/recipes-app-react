import React from "react";

export default function RecipeIngredientEdit({
  ingredient,
  handleIngredientChange,
  handleIngredientDelete
}) {
  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }
  return (
    <>
      <input
        type="text"
        className="recipe-edit__input"
        value={ingredient.name}
        onInput={e => handleChange({ name: e.target.value })}
      />
      <input
        type="text"
        className="recipe-edit__input"
        value={ingredient.amount}
        onInput={e => handleChange({ amount: e.target.value })}
      />
      <button
        className="btn btn_danger"
        onClick={() => handleIngredientDelete(ingredient.id)}>
        &times;
      </button>
    </>
  );
}
