import { useContext } from "react";
import MealContext from "../context/MealContext";
import MealCard from "./MealCard";

function SearchResults() {
    const { search, searchResults, handleMealSelected } = useContext(MealContext)
    return (
        <section id="search-results" className="container my-5">
            <h2 className="my-5">Results for "{search}"</h2>
            <section id="container-results" className="row justify-content-center gap-3">
                {searchResults && searchResults.map(meal => <MealCard key={meal.idMeal} data={meal} handleMealSelected={handleMealSelected} />)}
            </section>
        </section>);
}

export default SearchResults;