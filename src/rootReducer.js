import Data from "./Data";
const cart = [];
const INITIAL_STATE = { products: Data, cart: [] };
console.log(INITIAL_STATE);

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("added");
      if (state.cart.some((product) => product.name === action.payload.name)) {
        state.cart.map((item) => {
          return item.name === action.payload.name
            ? (item.quantity = item.quantity + action.payload.quantity)
            : item;
        });
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              name: action.payload.name,
              price: action.payload.price,
              image: action.payload.image,
              category: action.payload.category,
              quantity: action.payload.quantity,
            },
          ],
        };
      }
    case "REMOVE_FROM_CART":
      console.log("removed");
      return {
        ...state,
        cart: [
          ...state.cart.filter(
            (product) => product.name != action.payload.name
          ),
        ],
      };
    case "RAISE_QUANTITY":
      return {
        ...state,
        cart: [
          ...state.cart.map((product) =>
            product.name === action.payload.name
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        ],
      };
    case "LOWER_QUANTITY":
      return {
        ...state,
        cart: [
          ...state.cart.map((product) =>
            product.name === action.payload.name && product.quantity > 0
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
        ],
      };
  }
  return state;
};

export default rootReducer;
