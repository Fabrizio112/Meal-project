import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MealContext from "../context/MealContext";

function CategoriesCard({ data }) {
    const { handleCategorySelected } = useContext(MealContext)
    const [dataCategory, setDataCategory] = useState(data)
    return (
        <section id="category-card" className="col text-center d-flex flex-column justify-content-center align-items-center">
            <img src={data.strCategoryThumb} alt="" />
            <div id="category-card-info" >
                <h4 className="my-3 h1">{data.strCategory}</h4>
                <p className="px-2">{data.strCategoryDescription}</p>
                <Link className="btn btn-primary my-4" onClick={() => handleCategorySelected(data)} to={`/categories/${data.strCategory}`}>View More</Link>
            </div>
        </section>);
}

export default CategoriesCard;