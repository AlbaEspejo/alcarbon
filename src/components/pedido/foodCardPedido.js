
import { useEffect, useState } from 'react';
import foodData from '../carta/foodData';  // Ajusta la ruta donde tengas el archivo foodData
import CardPedido from './cardPedido';  // Asegúrate de importar el componente CardPedido
import ModalPedido from './modalPedido';
import { useCart } from '../../context/CartContext';

const FoodCardPedido = ({ addItemToCart }) => {
  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const { addToCart } = useCart();

    const handleOpenModal = (cardData) => {
        setSelectedCard(cardData);
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
      };

      
      useEffect(() => {
        if (isModalOpen) {
          document.body.classList.add('no-scroll-modal-pedido');
        } else {
          document.body.classList.remove('no-scroll-modal-pedido');
        }
      }, [isModalOpen]);
  return (
    <>
    <div className="food-menu">
      {/* Mapeo de Entrantes */}
      <h2 id='entrantes' className='title-pedido-carta'>ENTRANTES</h2>
      <div className="food-category">
        {foodData.entrantes.map((item, index) => (
          <CardPedido
            key={item.id} // Usa item.id como clave
            id={item.id}
            category={item.category}
            image={item.image}
            title={item.name}
            description={item.description}
            price={item.price || 'Precio no disponible'}
            onOpenModal={handleOpenModal} 
          />
          
        ))}
      </div>

      {/* Mapeo de Burgers */}
      <h2 id='hamburguesas' className='title-pedido-carta mt-5'>HAMBURGUESAS</h2>
      <div className="food-category">
        {foodData.burger.map((item, index) => (
          <CardPedido
            key={item.id} // Usa item.id como clave
            id={item.id}
            category={item.category}
            image={item.image}
            title={item.name}
            description={item.description}
            price={item.price || 'Precio no disponible'}
            onOpenModal={handleOpenModal}
          />
        ))}
      </div>

      {/* Mapeo de Pizzas */}
      <h2 id='pizzas' className='title-pedido-carta mt-5'>PIZZAS</h2>
      <div className="food-category">
        {foodData.pizzas.map((item, index) => (
          <CardPedido
            key={item.id} // Usa item.id como clave
            id={item.id}
            category={item.category}
            image={item.image}
            title={item.name}
            description={item.description}
            price={item.price || 'Precio no disponible'}
            onOpenModal={handleOpenModal}
          />
        ))}
      </div>

      {/* Mapeo de Ensaladas */}
      <h2 id='ensaladas' className='title-pedido-carta mt-5'>ENSALADAS</h2>
      <div className="food-category">
        {foodData.ensaladas.map((item, index) => (
          <CardPedido
            key={item.id} // Usa item.id como clave
            id={item.id}
            category={item.category}
            image={item.image}
            title={item.name}
            description={item.description}
            price={item.price || 'Precio no disponible'}
            onOpenModal={handleOpenModal}
          />
        ))}
      </div>

      {/* Mapeo de Menú Infantil */}
      <h2 id='kids' className='title-pedido-carta mt-5'>PARA NIÑOS</h2>
      <div className="food-category">
        {foodData.kids.map((item, index) => (
          <CardPedido
            key={item.id} // Usa item.id como clave
            id={item.id}
            category={item.category}
            image={item.image}
            title={item.name}
            description={item.description}
            price={item.price || 'Precio no disponible'}
            onOpenModal={handleOpenModal}
          />
        ))}
      </div>

      {/* Mapeo de Postres */}
      <h2 id='postres' className='title-pedido-carta postre mt-5'>POSTRES</h2>
      <div className="food-category">
        {foodData.postres.map((item, index) => (
          <CardPedido
            key={item.id} // Usa item.id como clave
            id={item.id}
            category={item.category}
            image={item.image}
            title={item.name}
            description={item.description}
            price={item.price || 'Precio no disponible'}
            onOpenModal={handleOpenModal}
          />
        ))}
      </div>
    </div>
    {isModalOpen && selectedCard && (
            <ModalPedido 
              cardData={selectedCard} 
              onClose={handleCloseModal} 
              onConfirm={(quantity) => {
                addToCart(selectedCard, quantity);
                handleCloseModal();
              }}
            />
          )}
    </>
  );
};

export default FoodCardPedido;
