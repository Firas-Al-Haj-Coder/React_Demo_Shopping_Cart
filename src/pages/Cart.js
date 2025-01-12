import { CartCard } from "../components";
import useTitle from "../hooks/useTitle"; // Korrekt als Standardexport importiert

import { useCart } from "../context/CartContext";


export default function Cart() {

  useTitle("Cart"); // Hook-Aufruf in die Komponente verschoben

  const { total, cartList } = useCart();
  console.log(cartList);


  return (
    <main>
      <section>
        <h1>Cart items: {cartList.length} | total price: ${total} </h1>
        {cartList.map((p) => {
          //console.log(p); // Ausgabe des p-Objekts in der Konsole
          return <CartCard key={p.id} prod={p} />; // drill prop in CartCard to be removed later
        })}
      </section>
    </main>
  );
}