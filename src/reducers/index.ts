import * as types from '../actions/ActionTypes';

const initialState: {counters: {[key:string]: any}} = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
}

function counter(state = initialState, action: {type: string, index: number, color: string}): {[key: string]: any} {
    const { counters }: {[key: string]: any} = state;

    switch(action.type) {
        case types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number + 1,
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        case types.DECREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        case types.SET_COLOR:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        case types.CREATE:
            return {
                counters: [
                    ...counters,
                    {
                        color: action.color,
                        number: 0
                    }
                ]
            }
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length - 1)
            };
        default:
            return state;
    }
}

export default counter;