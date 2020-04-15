import { ADD_POINT, REMOVE_POINT } from '../actions/pointActions';

const initialState = {
    items: []
};

export const points = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_POINT:             
            return {
                ...state,
                items: state.items.filter(point => point.id !== action.payload.id )
            };
        case ADD_POINT:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        default:
            return state;            
    }
};

