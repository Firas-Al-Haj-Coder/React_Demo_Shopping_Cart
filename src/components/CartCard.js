import "./CartCard.css"
import { useCart } from "../context/CartContext";

export default function CartCard({ prod }) {

  const {name, price, image} = prod;

  const { removeFromCart } = useCart();
  
  function handleRemove() {

    removeFromCart(prod);
  }
  return (
    <div className="cartCard">
      <img src={image} alt="bild" />
      <p className="productName">{name}</p>
      <p className="productPrice">{price}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>

  )
}
