import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_NAME } from "../actions";


const initialState = {

    stateproducts:{},
    stateSearch: {}, 
};

const reducer =  (state = initialState, action) => {

    switch(action.type){

        case GET_ALL_PRODUCTS:
            
            return {
                ...state,
                stateproducts:action.payload
        };

        case GET_PRODUCT_BY_NAME: 

            return {

                ...state, stateSearch: state.stateproducts.filter((e) => e.name === action.payload)
            }
     
            default:
                console.log(state);
            return state;
    }

};

export default reducer;

// return state.map((todo) =>
// todo.id === action.payload ? {...todo, status:"InProgress"} : todo
// );