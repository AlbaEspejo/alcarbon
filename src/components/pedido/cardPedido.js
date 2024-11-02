
import './pedido.css';

const CardPedido = ({ image, title, description, price, id, onOpenModal, category }) => {
    const handleOpenModal = () => {
      onOpenModal({ image, title, description, price, id, category });
    };

    return (
      <div className="card-pedido">
        <img src={image} alt={title} className="card-image-pedido" />
        <div className="card-content-pedido">
          <h2 className="card-title-pedido">{title}</h2>
          <p className="card-description-pedido">{description}</p>
          <div className='container-price-button d-flex justify-content-between'>
            <p className="card-price-pedido">{price} €</p>
            <button className="card-button-pedido" onClick={handleOpenModal}>+</button>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default CardPedido;