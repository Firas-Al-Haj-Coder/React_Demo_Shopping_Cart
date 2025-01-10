import "./ProductCard.css"

export default function ProductCard({ prod }) {
  const { name, price, image } = prod;

  return (
    <div className="productCard">
      <img src={image} alt="bild" />
      <p className="prodName">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}