import * as React from 'react';
import Counter from './Counter';

import './CounterList.css';

interface ICounterList {
    counters: {[key: string]: any};
    onIncrement(): void;
    onDecrement(): void;
    onSetColor(): void;
}

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}: ICounterList): JSX.Element => {
    const counterList = counters.map((counter: {[key: string]: string|number}, i: number): Counter => (
        <Counter 
            key={i}
            index={i}
            {...counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onSetColor={onSetColor}/>
    ));

    return (
        <div className="CounterList">{counterList}</div>
    )
}

CounterList.defaultProps = {
    counters: []
}

export default CounterList;