import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/css/styles.css"
import Home from './pages/Home'
import { HashRouter, Routes, Route } from "react-router-dom"
import { MealProvider } from './context/MealContext'
import * as bootstrap from "bootstrap";
import IndividualCategory from './pages/IndividualCategory'
import IndividualMeal from './pages/IndividualMeal'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MealProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories/:name' element={<IndividualCategory />} />
          <Route path='/categories/:name/:name' element={<IndividualMeal />} />
          <Route path='*' element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </HashRouter>
    </MealProvider>

  </React.StrictMode>,
)
