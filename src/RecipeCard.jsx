// RecipeCard.jsx

import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
     
        <img src={recipe.image} alt={recipe.label}/>
       <h2>{recipe.label}</h2>
       <h3> <b>Ingredients:</b> </h3>        
          {recipe.ingredientLines.map((ingredient, index) => (
           
            <p>{ingredient}</p>
              
           
          ))}
        
        <button> <a
            href={"/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Recipe
          </a></button>
         
    </div>
  );
};

export default RecipeCard;
