import "./App.css";
import React, { useEffect, useState } from "react";
import Recipes from "./Recipes";
function App() {
  const App_Id = "5d85251d";
  const App_Key = "5282fc45a660b5c3057d88a7bd6eb858	";
  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken');
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_Key}`
    );
    const data = await response.json();
    //console.log(data)
    setRecipes(data.hits);
  };
  console.log(recipes);

  const getQuery = (e)=>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getQuery}>
        <input className="search-bar" type="text" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes"> 
      {recipes.map((recipe) => (
        
        <Recipes
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          img={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
     
    </div>
  );
}

export default App;
