// CartIcon.js
import './pedido.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext'; // Importa el hook de contexto

const CartIcon = () => {
    const { cartItems } = useCart(); // Obtén los artículos del carrito

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className='div-carrito'>
            <FaShoppingCart className='icono-carrito' />
            {totalItems > 0 && <span className='total-productos'>{totalItems}</span>}
        </div>
    );
};

export default CartIcon;

