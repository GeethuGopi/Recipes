import React from 'react';
const Recipes = ({title,calories,img,ingredients}) => {
    return ( <div>
        <h1>{title}</h1>
           <ol>
           {ingredients.map((ingredient)=>(
            <li>{ingredient.text}</li>
        ))}
        </ol>
        <p>{calories}</p>
        <img src={img} alt=""></img>
        </div> );
}
 
export default Recipes;