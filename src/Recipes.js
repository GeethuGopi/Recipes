import React from 'react';
import style from "./recipe.module.css"//using css module we can encapsulate css to a particular component
const Recipes = ({title,calories,img,ingredients}) => {
    return ( <div className={style.recipe}>
        <h1>{title}</h1>
           <ol>
           {ingredients.map((ingredient)=>(
            <li>{ingredient.text}</li>
        ))}
        </ol>
        <p>Calories: {calories}</p>
        <img className={style.image} src={img} alt=""></img>
        </div> );
}
 
export default Recipes;