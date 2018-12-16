import * as types from '../actions/ActionTypes';

const initialState: {[key: string]: string} = {
    color: 'black'
}

const color = (state = initialState, action: any): {[key:string]:string} => {
    switch(action.type){
        case types.SET_COLOR:
            return {
                color: action.color
            }
        default:
            return state;
    }
}

export default color;