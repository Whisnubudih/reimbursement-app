import { FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTSID_SUCCESS, LOADING_PRODUCTS, ERROR_PRODUCTS } from '../actionTypes'

const initialState = {
    products: [],
    productId: [],
    productsLoading: true,
    productsError: null,
    
}

function reimbursementReducer(state = initialState,action) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS :
            return {
                ...state,
                products: action.payload
            }
        case FETCH_PRODUCTSID_SUCCESS :
            return {
                ...state,
                    productId: action.payload
            } 
        case LOADING_PRODUCTS:
          return {
            ...state,
            productsLoading: action.payload,
          };
    
        case ERROR_PRODUCTS:
          return {
            ...state,
            productsError: action.payload,
          };
        default:
            return state
    }
}


export default reimbursementReducer