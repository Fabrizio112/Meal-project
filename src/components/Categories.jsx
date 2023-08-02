import { useContext, useState } from "react";
import MealContext from "../context/MealContext";
import CategoriesCard from "./CategoriesCard";

function Categories() {
    const { categories } = useContext(MealContext)
    return (
        <section id="categories" className="container my-5">
            <h2 className="my-5 text-decoration-underline text-uppercase">Categories :</h2>
            <div className="row justify-content-between gap-5">
                {categories && categories.map(category => <CategoriesCard key={category.strCategory} data={category} />)}
            </div>
        </section>
    );
}

export default Categories;