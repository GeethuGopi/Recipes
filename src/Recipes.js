import React from 'react';
const Recipes = ({title,calories,img}) => {
    return ( <div>
        <h1>{title}</h1>
        <p>{calories}</p>
        <img src={img} alt=""></img>
        </div> );
}
 
export default Recipes;