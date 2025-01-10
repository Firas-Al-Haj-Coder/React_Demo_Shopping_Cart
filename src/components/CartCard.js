import "./CartCard.css"

export default function CartCard({ prod }) {

  const {name, price, image} = prod;

  return (
    <div className="cartCard">
      <img src={image} alt="bild" />
      <p className="productName">{name}</p>
      <p className="productPrice">{price}</p>
      <button>Remove</button>
    </div>

  )
}
