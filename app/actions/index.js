import { CHANGE_POSITION } from '../constants';
import { ADD_HUNTER } from '../constants';
import { DELETE_HUNTER } from '../constants';
import { SET_LANG } from '../constants';


export const changePosition = () => {
    let maxX = 1100;
    if (screen.width < 1100) {
        maxX = screen.width - 100;
    };
    const action = {
        type: CHANGE_POSITION,
        position: getRandomPosition(maxX, 450)
    }
    return action;
};

function getRandomPosition(coordinateX, coordinateY) {
    let randomX = Math.ceil(Math.random() * coordinateX);
    let randomY = Math.ceil(Math.random() * coordinateY);

    return {
        x: randomX,
        y: randomY
    }
};

export const addHunter = (hunter) => {
    if (hunter.imgSrc === '') {
        hunter.imgSrc = 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-knives-ninja.png'
    };
    hunter.age = countAge(hunter.bdate);
    return {
        type: ADD_HUNTER,
        hunter
    }
};

function countAge (date) {
    let currentDate = new Date();
    let birthDate = new Date(date);
    let age = 0;

    if (currentDate.getMonth() < birthDate.getMonth()) {
        age = (currentDate.getFullYear() - birthDate.getFullYear()) - 1;
    } else {
        age = (currentDate.getFullYear() - birthDate.getFullYear())
    }
    return age;
};

export const deleteHunter = (index) => ({
    type: DELETE_HUNTER,
    index
});

export const setLang = lang => ({
    type: SET_LANG,
    lang
})

export const localeSet = lang => (dispatch) => {
    localStorage.alhubLang = lang;
    dispatch(setLang(lang));
}