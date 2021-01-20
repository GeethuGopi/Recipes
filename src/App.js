import "./App.css";
import React, { useEffect, useState } from "react";
import Recipes from "./Recipes";
function App() {
  const App_Id = "5d85251d";
  const App_Key = "5282fc45a660b5c3057d88a7bd6eb858	";
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async ()=>{
    const response = await fetch (`https://api.edamam.com/search?q=chicken&app_id=${App_Id}&app_key=${App_Key}`);
    const data = await response.json();
    //console.log(data)
    setRecipes(data.hits)
  }
  console.log(recipes)
  
  
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipes title={recipe.recipe.label} calories={recipe.recipe.calories} img={recipe.recipe.image} />
        ))}
    </div>
  );
}

export default App;
