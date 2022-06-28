import * as actionType from "./Type";

export const addToCart = (itemID) => {
  return {
    type: actionType.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};
export const removeFromCart = (itemID) => {
  return {
    type: actionType.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};
export const adjustQty = (itemID, value) => {
  return {
    type: actionType.ADJUST_QTY,
    payload: {
      id: itemID,
      // qty:Number(value),
    },
  };
};
export const viewItem = (item) => {
  return {
    type: actionType.VIEW_ITEM,
    payload: item,
  };
};
export const Products = (product) => {
  return {
    type: actionType.GET_DATA,
    payload :{
        product:product
    }
  };
};
