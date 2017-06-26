import { CHANGE_POSITION } from '../constants';
import { ADD_HUNTER } from '../constants';
import { combineReducers } from 'redux';


const positionApp = (state = {x: 0, y: 0}, action) => {
    switch(action.type){
        case CHANGE_POSITION:
            let maxX = 1100;
            if (screen.width < 1200) {
                maxX = screen.width - 100;
            }
            return getRandomPosition(maxX, 450);
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
            if (action.hunter.imgSrc === '') {
                action.hunter.imgSrc = 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-knives-ninja.png'
            }
            return [...state, Object.assign({}, action.hunter, countAge(action.hunter.bdate))];
            default:
                return state;
    };
};

function countAge (date) {
    let currentDate = new Date();
    let ageDate = new Date(date);

    return {
        age: (currentDate.getFullYear() - ageDate.getFullYear())
    };
}

const rootReducer = combineReducers({positionApp, hunter});

export default rootReducer;