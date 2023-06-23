import Data from "./Data";
const cart = []
const INITIAL_STATE = { products : Data, cart : [] };
console.log(Data);
console.log(INITIAL_STATE)

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  }
  return state;
};

export default rootReducer