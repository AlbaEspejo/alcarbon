
import burger from "../../MEDIA/ICON/ICON_BURGER.png"
import pizza from "../../MEDIA/ICON/ICON_PIZZA.png"
import salad from "../../MEDIA/ICON/ICON_SALAD.png"
import entrantes from "../../MEDIA/ICON/ICON_ENTRANTES.png"
import kids from "../../MEDIA/ICON/ICON_KIDS.png"
import postres from "../../MEDIA/ICON/ICON_POSTRES.png"
import { useState } from "react"


 const AsideMenu = ({ onCategoryChange }) => {

  const [selectedCategory, setSelectedCategory] = useState("entrantes");

   const handleCategoryClick = (category) => {
     setSelectedCategory(category); // Actualiza el estado con la categoría seleccionada
     onCategoryChange(category);    // Llama a la función de cambio de categoría
   };

   return (
     <aside className="menu">
       <ul>
         <li onClick={() => handleCategoryClick("entrantes")}
            className={selectedCategory === "entrantes" ? "selected" : ""}>
           <img src={entrantes} alt="Entrantes" />
           Entrantes
         </li>
         <li onClick={() => handleCategoryClick("ensaladas")}
            className={selectedCategory === "ensaladas" ? "selected" : ""}>
           <img src={salad} alt="Ensaladas" />
           Ensaladas
         </li>
         <li onClick={() => handleCategoryClick("pizzas")}
            className={selectedCategory === "pizzas" ? "selected" : ""}>
           <img src={pizza} alt="Pizzas" />
           Pizzas
         </li>
         <li onClick={() => handleCategoryClick("burger")}
            className={selectedCategory === "burger" ? "selected" : ""}>
           <img src={burger} alt="Hamburguesas" />
           Hamburguesas
         </li>
         <li onClick={() => handleCategoryClick("kids")}
            className={selectedCategory === "kids" ? "selected" : ""}>
           <img src={kids} alt="Para niños" />
           Kids
         </li>
         <li onClick={() => handleCategoryClick("postres")}
            className={selectedCategory === "postres" ? "selected" : ""}>
           <img src={postres} alt="Postres" />
           Postres
         </li>
       </ul>
     </aside>
   );
 };

 export default AsideMenu;

