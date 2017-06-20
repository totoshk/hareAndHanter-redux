import { CHANGE_POSITION } from '../constants';
import { ADD_HUNTER } from '../constants';

export const changePosition = () => {
    const action = {
        type: CHANGE_POSITION
    }
    return action;
};

// Экшен принимает объект hunter
export const addHunter = (hunter) => {
    const action = {
        type: ADD_HUNTER,
        hunter
    }
    return action;
};
