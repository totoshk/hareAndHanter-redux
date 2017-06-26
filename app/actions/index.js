import { CHANGE_POSITION } from '../constants';
import { ADD_HUNTER } from '../constants';

export const changePosition = () => {
    const action = {
        type: CHANGE_POSITION
    }
    return action;
};


export const addHunter = (hunter) => ({
    type: ADD_HUNTER,
    hunter
});
