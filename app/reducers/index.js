import { CHANGE_POSITION } from '../constants';

// 4. Создаем редюсер, который принимает состояние, экшен и возвращает новое состояние.

const positionApp = (state = {}, action) => {
    switch(action.type){
        case CHANGE_POSITION:
            return getRandomPosition(950, 450);
        default:
            return state;
    };
};

// 5. Создадим функцию, которая вернет объект со случайными знаечниями для Х и У.
// Вызовем эту функцию в редюсере и передадим в нее максимальные значения по Х и по У.

function getRandomPosition(coordinateX, coordinateY) {
    let randomX = Math.ceil(Math.random() * coordinateX);
    let randomY = Math.ceil(Math.random() * coordinateY);

    return {
        x: randomX,
        y: randomY
    }
};


export default positionApp;