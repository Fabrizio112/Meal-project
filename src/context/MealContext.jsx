import { createContext, useEffect, useState } from "react";

const MealContext = createContext()
const MealProvider = ({ children }) => {
    const [categories, setCategories] = useState("") //Este estado se encarga de realizar la peticion para traer las diferentes categorias
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(res => res.json())
            .then(json => {
                setCategories(json.categories)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const [categorySelected, setCategorySelected] = useState(null) // Trae la info de la categoria seleccioanda
    const [mealsCategory, setMealsCategory] = useState(null) //Posee la info de las comidas de la categoria seleccionada
    const handleCategorySelected = (data) => {
        const name = data.strCategory
        setCategorySelected(data)
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
            .then(res => res.json())
            .then(json => {
                setMealsCategory(json.meals)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const [meal, setMeal] = useState(null)
    const handleMealSelected = (name) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(res => res.json())
            .then(json => {
                setMeal(json.meals[0])
            })
            .catch(error => {
                console.log(error)
            })
    }

    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const [searchResults, setSearchResults] = useState("")
    const handleSearch = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(json => {
                setSearchResults(json.meals)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const data = { categories, handleCategorySelected, categorySelected, setCategorySelected, mealsCategory, setMealsCategory, handleMealSelected, meal, setMeal, search, handleChange, handleSearch, searchResults }
    return (<MealContext.Provider value={data}>{children}</MealContext.Provider>)
}

export default MealContext
export { MealProvider }