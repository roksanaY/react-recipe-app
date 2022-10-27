import { useEffect, useState } from "react";
import Button from "./Button";
import Recipe from "./Recipe";




export default function Recipes(){

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");
    const [error, setError] = useState(false);


    


    useEffect(() => {
        getRecipes(); 
        // eslint-disable-next-line
    },[query]);

    const getRecipes = async () => {

        const app_id = process.env.REACT_APP_APP_ID;
        const app_key = process.env.REACT_APP_APP_KEY;


        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`);

        const data = await response.json();

        if(data.hits.length > 0){
            setRecipes(data.hits);
            setError(false);
        }else{
            setError(true);
        }
    }

    const updateSearch = (e) => {

        setSearch(e.target.value);

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    const homeLocation = () => {
        window.location.reload();
    }


    return (
        <>
        <div className="brand">
            <h1>Search Your Recipe</h1>
            <form onSubmit={handleSubmit} className="search-form">
                <label>Search Recipe
                    <input type="text" value={search} onChange={updateSearch} />
                </label>
                <Button type="submit">Search</Button>
            </form>
        </div>
        <main className="main">
            <div className="container">
                <div className="recipes">
                {error ? (
                <>
                    <h4>Oops! Search result not found! It might happen that API stop responding, because it's only accept 10 request / minute. Please wait and try again.</h4>
                    <Button onClick={homeLocation}>Go Back</Button>
                </> ) :
                    (recipes.map((item, index) => (
                        <Recipe
                        key={index}
                        title={item.recipe.label}
                        image={item.recipe.image}
                        calories={item.recipe.calories}
                        ingredients={item.recipe.ingredients}
                        />
                    ))) }
                </div>
            </div>
        </main>
        </>
    );
}