const BASE_URL = 'https://backendapi.turing.com';

export const productConstant = {
  ALL_PRODUCTS_URL: `${BASE_URL}/products`,
  PRODUCTS_ATTRIBUTES_URL: `${BASE_URL}/attributes/inProduct`,
};
export const cartConstant = {
  GENERATE_CART_ID_URL: `${BASE_URL}/shoppingcart/generateUniqueId`,
  ADD_PRODUCT_TO_CART_URL: `${BASE_URL}/shoppingcart/add`,
  MOVE_PRODUCT_TO_CART_URL: `${BASE_URL}/shoppingcart/moveToCart`,
  GET_CART_PRODUCTS_URL: `${BASE_URL}/shoppingcart`,
  UPDATE_CART_PRODUCT_URL: `${BASE_URL}/shoppingcart/update`,
  REMOVE_CART_PRODUCT_URL: `${BASE_URL}/shoppingcart/removeProduct`,
  EMPTY_CART_URL: `${BASE_URL}/shoppingcart/empty`,
  TOTAL_AMOUNT_CART_URL: `${BASE_URL}/shoppingcart/totalAmount`,
  SAVE_FOR_LATER_URL: `${BASE_URL}/shoppingcart/saveForLater`,
  GET_SAVED_ITEMS_URL: `${BASE_URL}//shoppingcart/getSaved`
};

