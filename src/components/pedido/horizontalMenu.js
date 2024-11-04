import { useState } from "react";


const HorizontalMenu = () => {

  const [selectedCategory, setSelectedCategory] = useState('entrantes');  

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -180; // Ajusta este valor al tamaño del menú fijo
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setSelectedCategory(sectionId);
    }
  };

  return (
    <div className="horizontal-menu">
      <ul className="menu-list list-inline">
        <li className={`list-inline-item ${selectedCategory === 'entrantes' ? 'active' : ''}`} 
            onClick={() => handleScroll('entrantes')}>Entrantes</li>

        <li className={`list-inline-item ${selectedCategory === 'ensaladas' ? 'active' : ''}`} 
            onClick={() => handleScroll('ensaladas')}>Ensaladas</li>

        <li className={`list-inline-item ${selectedCategory === 'pizzas' ? 'active' : ''}`} 
            onClick={() => handleScroll('pizzas')}>Pizzas</li>

        <li className={`list-inline-item ${selectedCategory === 'hamburguesas' ? 'active' : ''}`} 
            onClick={() => handleScroll('hamburguesas')}>Hamburguesas</li>

        <li className={`list-inline-item ${selectedCategory === 'kids' ? 'active' : ''}`} 
            onClick={() => handleScroll('kids')}>Kids</li>

        <li className={`list-inline-item postre-menu ${selectedCategory === 'postres' ? 'active' : ''}`} 
            onClick={() => handleScroll('postres')}>Postres</li>
      </ul>
    </div>
  );
};

export default HorizontalMenu;
