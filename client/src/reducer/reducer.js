import { GET_ALL_PRODUCTS } from "../actions";


const initialState = {

    stateproducts:{},
};

const reducer =  (state = initialState, action) => {

    switch(action.type){

        case GET_ALL_PRODUCTS:
            
            return {
                ...state,
                stateproducts:action.payload
            };

            default:
                console.log(state);
            return state;
    }

};

export default reducer;