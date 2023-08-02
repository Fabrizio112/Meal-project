# Meal App with React 

In this proyect was used hooks like **useState,useEffect,useContext** , technologies like **HTML,CSS,Javascript,React,Sass,Bootstrap** and for the route managment **React Router**

_This proyect was built with the purpose of practising React_

<p align="center">
<img src="./src/assets/images/gardfiel-eating.gif" alt="gardfield eating lasagna">
</p>

## How i thought about the project and its functioning

**_Main Idea: Do a food app that contains diferent categories and into that categories ,have different foods also  can see information about each food_**

API used in this project : 
- [MealApi](https://www.themealdb.com/api.php)

Well,First of all I organized the app in the first route , it was Home . I maked the different components for this route : NavBar, Header without function of the search bar , Categories , and Search Results but I will write about it more ahead

I created a Context for handle the general state of the app. The first challenge was get the different categories . So I created a state called "categories" and with a useState I do a fetch to the api in the endpoint (www.themealdb.com/api/json/v1/1/categories.php) and with the results I set the state. With this information I rendered the Categories component and fill the side navbar

When I filled out that information then I created the second route of the App , called "Individual Category".User can access it when press the button "view more" into the individual card of each category or when uses the side bar and clicks in any category there . In either of the two cases it will fill a state with the category selected and do a fetch for get the differents foods

A state called "categorySelected" will contain different information about the category selected and another state called "mealsCategory" will contain  information about all the food that belong to the category Selected

Into the second route ,user can view more information about any food present here or go back .If the user clicks in the button back ,backs home page
If the user clicks in any view more then can see more information about it food

For the second option ,I make and state called "meal" that fills when user clicks the view more button , because the app do a fetch to the api in the endpoint ("www.themealdb.com/api/json/v1/1/search.php?s=") with the name of the food.

In the third route ,user can see the information about the food selected , thanks to the state "meal" that was filled previously

Backing backwards, in the first route when I finish the other stuff mentioned above, I finished the search bar .I make a state for handle the information into the search bar , this state was called "search" and with the information of it state , when user clicks button of search , it will make a fetch to the endpoint ("www.themealdb.com/api/json/v1/1/search.php?s=") and the results will storage in the state "searchResults"

Into the Home , I put a conditional render When "searchResults" has any, it will be render the Component Search Results with the differents foods of the response

The functioning of the cards results is the same of the different foods into the categories page. So when user clicks view more , can see different information about the food .

For the Styles , I used Bootstrap and SASS (for minor adjustments )