import React from 'react'

const IngredientList = ({ ingredients }) => {

  const seen = new Set();
  const filteredIngredients = ingredients.filter(item => {
    const hasDuplicate = seen.has(item.id);
    seen.add(item.id);
    return !hasDuplicate;
  });

  return (
    <ul>
      {filteredIngredients.map(ingredient => 
        <li key={ingredient.id}>{ingredient.name}</li>
      )}
    </ul>
  )
}

export default IngredientList