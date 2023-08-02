import { useContext, useEffect, useRef } from "react";
import MealContext from "../context/MealContext";
import { useNavigate } from "react-router-dom";

function IndividualMeal() {
    const { meal } = useContext(MealContext)

    let instruction = meal && `${meal.strInstructions}`
    let regularExpresionForInstruction = /\n+/
    let instruccionArray = instruction && instruction.split(regularExpresionForInstruction)
    let instruccionArrayFilter = instruccionArray && instruccionArray.filter(el => el.length > 2)
    const tags = meal && meal.strTags ? meal.strTags : "Without Tags"
    const arrayTags = tags.split(",")
    const allIngredients = meal && [meal.strIngredient1, meal.strIngredient2, meal.strIngredient3, meal.strIngredient4, meal.strIngredient5, meal.strIngredient6, meal.strIngredient7, meal.strIngredient8, meal.strIngredient9, meal.strIngredient10, meal.strIngredient11, meal.strIngredient12, meal.strIngredient13, meal.strIngredient14, meal.strIngredient15, meal.strIngredient16, meal.strIngredient17, meal.strIngredient18, meal.strIngredient19, meal.strIngredient20]
    const ingredientsFilter = (meal && allIngredients) && allIngredients.filter(el => el.length > 2)
    const allMeasures = meal && [meal.strMeasure1, meal.strMeasure2, meal.strMeasure3, meal.strMeasure4, meal.strMeasure5, meal.strMeasure6, meal.strMeasure7, meal.strMeasure8, meal.strMeasure9, meal.strMeasure10, meal.strMeasure11, meal.strMeasure12, meal.strMeasure13, meal.strMeasure14, meal.strMeasure15, meal.strMeasure16, meal.strMeasure17, meal.strMeasure18, meal.strMeasure19, meal.strMeasure20]
    const measuresFilter = (meal && allMeasures) && allMeasures.filter(el => el.length > 2)
    let navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }
    return (<section id="individual-meal" className="d-flex flex-column align-items-center justify-content-center">
        <button className="position-absolute top-0 start-0 btn btn-primary" onClick={handleBack}>← Back</button>
        {meal ? <>
            <h2 className="my-5 display-1 text-center">{meal.strMeal ? meal.strMeal : ""}</h2>
            <div className="row container ">
                <section className=" col-md-6 ">
                    <img src={meal.strMealThumb ? meal.strMealThumb : ""} alt="" className="w-100 h-100" />
                </section>
                <section className="col-md-6 d-flex flex-column justify-content-center my-4">
                    <span className="text-decoration-underline h5">Category :</span> {meal.strCategory ? <span>{meal.strCategory}</span> : "Not Found"}
                    <br />
                    <span className="text-decoration-underline h5">Source :</span>{meal.strSource ? <span> {meal.strSource}</span> : "Not Found"}
                    <br />
                    <span className="text-decoration-underline h5">Tags:</span>
                    <ul>
                        {(meal && arrayTags) && arrayTags.map((tag, index) => <li key={index}>{tag}</li>)}
                    </ul >
                    <div className="d-flex flex-column gap-3">
                        <p className="text-decoration-underline h3">Ingredients :</p>
                        <div className="d-flex flex-wrap gap-4 justify-content-center">
                            {meal && ingredientsFilter.map((el, index) => <li key={index}>{el}</li>)}
                        </div>
                    </div>
                </section >
                <section className="col-12">
                    <aside className="my-5">
                        <p className="text-decoration-underline h3 ">Measures :</p>
                        <ul className="row">
                            {meal && measuresFilter.map((el, index) => <li className="col-6" key={index}>{el}</li>)}
                        </ul>
                    </aside>
                    <aside className="my-5">
                        <p className="text-decoration-underline h3">Instruccions :</p>
                        <div className="d-flex flex-column gap-2 my-3">
                            {instruction && instruccionArrayFilter.map((el, index) => <li key={index}>{el}</li>)}
                        </div>
                    </aside>

                </section>
            </div >

            <a className="btn btn-primary mb-4" href={meal.strYoutube} target="_blank"> View Video</a>
        </> :
            <>
                <div className="bg-danger w-100 d-flex justify-content-center align-items-center">
                    <h1 className="text-light">An error unespected</h1>
                </div>
            </>}

    </section >);
}

export default IndividualMeal;