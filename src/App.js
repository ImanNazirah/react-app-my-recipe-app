import React, {useEffect, useState} from 'react'; 
import ListRecipe from './ListRecipe';
import './App.css';

const App = () => {

//https://www.edamam.com/
  const APP_ID ="6d59d0a7";
  const APP_KEY ="a36b6f631ff585bf022749b1752a322c";


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('vegan');

  //only when the query is called we can make a request
  useEffect(() => {
    getRecipes();
    console.log("Effect has been run");
  }, [query]); 


  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log("response", response)
    const data = await response.json();
    console.log("data", data)
    setRecipes(data.hits);
     console.log("datahits",data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log("search",search);
  };



  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    
  }



  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search for recipe"/>
        <button className="search-button" onSubmit={getSearch} onClick={getSearch} >Search</button>
      </form>
      <div className="recipes">
      {recipes.map( x => console.log("x",x)||(
        <ListRecipe
        key={x.recipe.label}
        title={x.recipe.label}  
        calories={Math.floor(x.recipe.totalDaily.ENERC_KCAL.quantity)} 
        image={x.recipe.image} 
        ingredients={x.recipe.ingredients}
        fats= {x.recipe.totalNutrients.FAT.quantity} 
        proteins= {x.recipe.totalNutrients.PROCNT.quantity}
        carbs= {x.recipe.totalNutrients.CHOCDF.quantity} 
         />
      ))}

      </div>
    </div>
  )
}
 
export default App;


            