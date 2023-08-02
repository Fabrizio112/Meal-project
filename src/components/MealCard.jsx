import { Link } from "react-router-dom";
function MealCard({ data, name, handleMealSelected }) {
    return (<div id="meal-card" className="card col-4 text-center" style={{ width: "18rem" }}>
        <img src={data.strMealThumb} className="card-img-top" alt={data.strMeal} />
        <div className="card-body">
            <h5 className="card-title my-3">{data.strMeal}</h5>
            <Link className="btn btn-primary my-4" onClick={() => handleMealSelected(data.strMeal)} to={`/categories/${name ? name : data.strCategory}/${data.strMeal}`} >View More</Link>
        </div>
    </div>);
}

export default MealCard;