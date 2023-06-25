export const removeItem = (name) => {
    return {type : "REMOVE_FROM_CART", payload : {name}}
}

export const addToCart = (image, name, price, category, quantity) => {
    return {
      type: "ADD_TO_CART",
      payload: { image, name, price, category, quantity },
    };
  };

  export const raiseQuantity = (name) => {
    return {type : "RAISE_QUANTITY", payload : {name}}
  }

 export const lowerQuantity = (name) => {
    return {type : "LOWER_QUANTITY", payload : {name}}
  }