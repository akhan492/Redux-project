import * as actionType from "./Type";
const initialState = {
  product: [],
  cart:  JSON.parse(localStorage.getItem("cart"))  ||[],
  isLoading: true,
  currentItem: null,
};
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = state.product.find((prod) => prod.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cart:state.cart.filter((item)=>item.id!==action.payload.id),
      };
    case actionType.ADJUST_QTY:
      return {
        ...state,
        cart:state.cart.map((item)=>item.id===action.payload.id ? {...item, qty:item.qty+1} : item)
      };
    case actionType.VIEW_ITEM:
      return {
        ...state,
      };
    case actionType.GET_DATA:
      return {
        ...state,
        product: action.payload.product,
        isLoading: false,
      };
      case "DEC":
        // const temp =state.cart.find((item)=>item.id===action.payload.id);
        // if(temp.qty===1) {
        //   cart: state.cart.filter((item)=> item.id!==action.payload.id)
        // }
        // return cart
        
        return{
          ...state,
         cart:state.cart.map((item)=>item.id===action.payload.id ? {...item,qty: item.qty-1} : item)
        }
    default:
      return state;
  }
};
export default shopReducer;
