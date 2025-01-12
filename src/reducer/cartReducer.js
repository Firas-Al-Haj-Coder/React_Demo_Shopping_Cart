export const cartReducer = (state, action) => {
    const { type, payload } = action; // action hat type und distpatcht payload 
  
    switch (type) {
      case "ADD_TO_CART":
        // Rückgabe des neuen Zustands mit aktualisierter cartList
        return { ...state, cartList: payload.products };
  
      case "REMOVE_FROM_CART":
        // Rückgabe des neuen Zustands mit aktualisierter cartList
        return { ...state, cartList: payload.products };
  
      case "UPDATE_TOTAL":
        // Rückgabe des neuen Zustands mit aktualisiertem total
        return { ...state, total: payload.total };
  
      default:
        // Fehler werfen, wenn kein passender Aktionstyp gefunden wird
        throw new Error("No case found in cartReducer");
    }
  };