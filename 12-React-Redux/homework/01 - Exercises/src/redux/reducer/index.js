import { DELETE_PRODUCT, ADD_PRODUCT, GET_STORE_NAME } from "../actions/types";

const initialState = {
   list: [],
   storeName: ''
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ADD_PRODUCT:
            return {
                ...state,
                list: [...state.list, payload]
            }
        case DELETE_PRODUCT:
            const filteredProducts = state.list.filter(elemen => elemen.id !== payload);
            return {
                ...state,
                list: filteredProducts
            }
        case GET_STORE_NAME:
            return {
                ...state,
                storeName: payload
            }
        default:
            return state;
    }
};

export default rootReducer;
