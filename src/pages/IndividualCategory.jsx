import { useContext } from "react";
import MealContext from "../context/MealContext";
import MealCard from "../components/MealCard";
import { useNavigate } from "react-router-dom";

function IndividualCategory() {
    const navigate = useNavigate()
    const { categorySelected, setCategorySelected, mealsCategory, setMealsCategory, handleMealSelected } = useContext(MealContext)
    mealsCategory ? mealsCategory.length != 0 ? window.localStorage.setItem("categories", JSON.stringify(mealsCategory)) : setMealsCategory(JSON.parse(window.localStorage.getItem("categories"))) : setMealsCategory(JSON.parse(window.localStorage.getItem("categories")))
    categorySelected ? categorySelected.length != 0 ? window.localStorage.setItem("category", JSON.stringify(categorySelected)) : setCategorySelected(JSON.parse(window.localStorage.getItem("category"))) : setCategorySelected(JSON.parse(window.localStorage.getItem("category")))

    const handleBack = () => {
        navigate(-1)
    }
    return (<section className="container text-center">
        <button className="position-absolute top-0 start-0 btn btn-primary" onClick={handleBack}>← Back</button>
        <h1 className="my-3">{categorySelected && categorySelected.strCategory}</h1>
        <section className="text-center">
            <h2 className="my-4 text-decoration-underline">Meals with {categorySelected && categorySelected.strCategory}</h2>
            <section id="container-cards" className="row gap-5 justify-content-center">
                {mealsCategory && mealsCategory.map(meal => <MealCard key={meal.idMeal} name={categorySelected.strCategory} data={meal} handleMealSelected={handleMealSelected} />)}
            </section>
        </section>
    </section>);
}

export default IndividualCategory;