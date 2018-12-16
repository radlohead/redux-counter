import * as types from '../actions/ActionTypes';

const initialState: {[key: string]: number} = {
    number: 0
}

const number = (state = initialState, action: {[key: string]: string}): {[key:string]: number} => {
    switch(action.type){
        case types.INCREMENT:
            return {
                number: state.number + 1
            }
        case types.DECREMENT:
            return {
                number: state.number - 1
            }
        default:
            return state;
    }
}

export default number;