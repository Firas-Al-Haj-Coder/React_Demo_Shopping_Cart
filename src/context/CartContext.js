import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

// Initialer Zustand des Warenkorbs
const initialState = {
  cartList: [], // Liste der Produkte im Warenkorb
  total: 0 // Gesamtsumme der Produkte im Warenkorb
};

// Erstellen des Warenkorb-Kontexts
const CartContext = createContext(initialState);

// Warenkorb-Provider-Komponente
export const CartProvider = ({ children }) => {
  // Verwenden des useReducer-Hooks mit dem cartReducer (beinhaltet die switch methoden, die für dispatch ausführbar sind) und dem initialen Zustand
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Funktion zum Hinzufügen eines Produkts zum Warenkorb
  const addToCart = (prod) => {
    const updatedCartList = [...state.cartList, prod];
    //state.cartList.concat(prod);
    console.log(updatedCartList)

    
    
    dispatch({ // dispatche die neuen Updates nach dem neuen Context
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList
      }
    });

    //total aktualisieren
    updateTotal(updatedCartList);

  };

  // Funktion zum Entfernen eines Produkts aus dem Warenkorb
  const removeFromCart = (prod) => {
    const updatedCartList = state.cartList.filter(current => current.id !== prod.id);

    dispatch({ // dispatch: Dispatcht eine Aktion, um den Zustand mit dem neuen cartList-Array zu aktualisieren.
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList
      }
    });

    //total aktualisieren
    updateTotal(updatedCartList);

  };

  // Funktion zum Berechnen von total items im cart 
  const updateTotal = (products) => {
    const total = products.reduce((acc, p) => acc + p.price, 0);

    dispatch({
        type: "UPDATE_TOTAL",
        payload: {
            total
        }
    })
  }


  // Wert, der an den Provider übergeben wird
  const value = {
    cartList: state.cartList, // Liste der Produkte im Warenkorb
    total: state.total, // Gesamtsumme der Produkte im Warenkorb
    addToCart, // Funktion zum Hinzufügen eines Produkts
    removeFromCart // Funktion zum Entfernen eines Produkts
  };

  // Rückgabe des Providers mit dem Wert und den Kindern (App)
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook zum Verwenden des Warenkorb-Kontexts (zum Zugreifen der Daten, aber im Endeffekt ist das useContext pur)
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider'); // wird der CartProvider korrekt verwendet, 
    // um den Kontext für den Warenkorb bereitzustellen, und der useCart-Hook kann innerhalb der Komponenten verwendet werden, die von CartProvider umschlossen sind. s. note useContext and Reducers
  }
  return context;
};