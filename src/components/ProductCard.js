import "./ProductCard.css"
import { useCart } from "../context/CartContext"
import { useEffect, useState } from "react";




export default function ProductCard({ prod }) {
  
  const { addToCart, cartList, removeFromCart} = useCart();


  const { id, name, price, image } = prod;

  // check if the product blatt ist already in my cart, yes -> show remove  
  const [isInCart, setIsInCart] = useState(false); 

  useEffect(() => {
    const prodIsInCart = cartList.find( item => item.id === id);

    if(prodIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id])

  return (
    <div className="productCard">
      <img src={image} alt="bild" />
      <p className="prodName">{name}</p>
      <div className="action">
        <p>${price}</p>

        {isInCart ? (<button className="remove" onClick={() => removeFromCart(prod)}>remove</button>) : (<button onClick={() => addToCart(prod)}>Add to Cart</button>)}
        
      </div>
    </div>
  );
}