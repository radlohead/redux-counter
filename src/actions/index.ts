import * as types from './ActionTypes';

export const increment = (index: number) => ({
    type: types.INCREMENT,
    index
});

export const decrement = (index: number) => ({
    type: types.DECREMENT,
    index
});

interface ISetColor {
    index: number;
    color: string;
}

export const setColor = ({index, color}: ISetColor) => ({
    type: types.SET_COLOR,
    index,
    color
});

export const create = (color: string) => ({
    type: types.CREATE,
    color
});

export const remove = () => ({
    type: types.REMOVE
});