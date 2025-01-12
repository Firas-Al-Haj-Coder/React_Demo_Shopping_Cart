import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const logo = process.env.PUBLIC_URL + '/assets/images/logo_192.jpg';


export default function Header() {

  const { cartList } = useCart();

  return (
    <header>
        <Link to="/" className="logo">
            <img className="rounded" src={logo} alt="Logo" />
            <span>Shopping cart</span>
        </Link>

        <nav className='navigation'>
            <NavLink to='/' className='link'>Home</NavLink>
            <NavLink to='/cart' className='link'>Cart</NavLink>
        </nav>

        <Link to="/cart" className="items">
            <span>Cart: {cartList.length}</span>
        </Link>
    </header>
  );
}