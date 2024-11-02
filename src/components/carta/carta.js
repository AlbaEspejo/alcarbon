// src/pages/Carta.js
import { useState } from "react";
import AsideMenu from "./asideMenu"; // Ajusta la ruta según tu estructura
import FoodCards from "./foodCards"; // Ajusta la ruta según tu estructura
import foodData from "./foodData"; // Importa el objeto foodData
import "./carta.css";

const Carta = () => {
  const [selectedCategory, setSelectedCategory] = useState("entrantes"); 

  return (
    <>
      <div className="d-flex">
        <AsideMenu onCategoryChange={setSelectedCategory} />
        <FoodCards category={selectedCategory} foodData={foodData} />
      </div>
    </>
  );
};

export default Carta;
