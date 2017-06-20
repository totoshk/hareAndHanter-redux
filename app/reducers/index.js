import { CHANGE_POSITION } from '../constants';
import { ADD_HUNTER } from '../constants';
import { combineReducers } from 'redux';


const positionApp = (state = {x: 0, y: 0}, action) => {
    switch(action.type){
        case CHANGE_POSITION:
            return getRandomPosition(950, 450);
        default:
            return state;
    };
};

function getRandomPosition(coordinateX, coordinateY) {
    let randomX = Math.ceil(Math.random() * coordinateX);
    let randomY = Math.ceil(Math.random() * coordinateY);

    return {
        x: randomX,
        y: randomY
    }
};


const hunter = (state = [], action) => {
    switch(action.type) {
        case ADD_HUNTER:
            return [...hunter, action.hunter];
            default:
                return state;
    };
};

const rootReducer = combineReducers({positionApp, hunter});

export default rootReducer;