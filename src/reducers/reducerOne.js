import {READ} from '../actions/Readaction';

const INITIAL_STATE = {products:[]};

export default (state = INITIAL_STATE, action) => {
    console.log('Reducer is Showing Action Type===========>',action.type);
    switch (action.type) {
        case READ:
            return {
                ...state,
                //products: [...state.products,  action.payload],
                products: [...action.payload],
            };
        default: return state;
    }
    
};
