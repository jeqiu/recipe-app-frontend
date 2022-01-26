import React from 'react'
import IngredientList from './IngredientList'

const Recipe = ({ title, image, sourceUrl, ingredients }) => {
  
  if (title) {
    return (
      <div>
        <h2>{title}</h2>
        <img src={image} alt={title} height="250" width= "auto" />
        <IngredientList ingredients={ingredients} />
        <a href={sourceUrl}>View Full Recipe</a>
      </div>
    )
  }

  return (
    <div>
      <h2>DEFAULT TITLE</h2>
      <ul>
        <li>ingredient1</li>
        <li>ingredient2</li>
      </ul>
      <a>default_source</a>
    </div>
  )
}

export default Recipe