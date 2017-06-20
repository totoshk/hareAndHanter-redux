import { CHANGE_POSITION } from '../constants';
import { ADD_HUNTER } from '../constants';
import { combineReducers } from 'redux';

// Редюсер для Зайца. Начальное состояние - объект, в свойствах которого 0.
// В действие передается ф-ция, которая возвращает объект с рандомными значениями для Х и для У.
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


// Редюсер для Охотника. Начальное состояние - пустой массив.
// Т.к. в actionCreator на вход подается и возвращается объъект, здесь также указываем это.
// При обновлении стейта объект будет добавляться в массив к остальным объектам, а не перезаписывать его.
// ...state - распаковать массив.

const hunter = (state = [], action) => {
    switch(action.type) {
        case ADD_HUNTER:
            return [...state, action.hunter];
            default:
                return state;
    };
};

const rootReducer = combineReducers({positionApp, hunter});

export default rootReducer;