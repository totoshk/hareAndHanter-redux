import { CHANGE_POSITION } from '../constants'; //импортируем константу, которая содержит в себе тип действия.

// 2. Создаем action, который возвращает тип действия CHANGE_POSITION и свойство position.
// Мы можем передавать какой-либо аргумент и записывать его в качестве второго значения в объект
// action. В данном случае ничего не передаем, т.к. мы не изменяем позицию, а генерируем новую. 

export const changePosition = () => {
    const action = {
        type: CHANGE_POSITION
    }

    console.log('action in changePosition', action);
    return action;
}