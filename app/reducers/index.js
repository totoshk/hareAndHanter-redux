import { CHANGE_POSITION } from '../constants';
import { ADD_HUNTER } from '../constants';
import { DELETE_HUNTER } from '../constants';
import { combineReducers } from 'redux';


const positionApp = (state = {x: 0, y: 0}, action) => {
    switch(action.type){
        case CHANGE_POSITION:
            return action.position;
        default:
            return state;
    };
};

const hunter = (state = [], action) => {
    switch(action.type) {
        case ADD_HUNTER:
            return [...state, Object.assign({}, action.hunter)];
        case DELETE_HUNTER:
            console.log(state);
            let newState = state.slice();
            newState.splice(action.index, 1);
            return newState;
        default:
            return state;
    };
};

const rootReducer = combineReducers({positionApp, hunter});

export default rootReducer;