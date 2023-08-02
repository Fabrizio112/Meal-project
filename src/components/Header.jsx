import { useContext } from "react";
import MealContext from "../context/MealContext";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    const { search, handleSearch, handleChange } = useContext(MealContext)
    return (
        <header className="d-flex text-center justify-content-center align-items-center">
            <div className="container d-flex flex-column gap-3 text-light">
                <aside className="input-group d-flex justify-content-center w-100">
                    <div className="form-outline ">
                        <input type="search" id="search" className="form-control form-control-lg" value={search} onChange={handleChange} placeholder="Into the food/ingredient/category ..." />
                    </div>
                    <button type="button" onClick={handleSearch} className="btn btn-primary ">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </aside>
                <h1>What are your favourite foods?</h1>
                <span>Found it here !!!!</span>
            </div>
        </header >);
}

export default Header;