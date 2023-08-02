import { useContext } from "react";
import Categories from "../components/Categories";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import MealContext from "../context/MealContext";
import SearchResults from "../components/SearchResults";

function Home() {
    const { searchResults } = useContext(MealContext)
    return (<>
        <NavBar />
        <Header />
        {searchResults && <SearchResults />}
        <Categories />
    </>);
}

export default Home;