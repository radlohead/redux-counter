import * as React from 'react';
import './Counter.css';

interface IProps {
    number: number;
    color: string;
    index: number;
    onIncrement(index: number): void;
    onDecrement(index: number): void;
    onSetColor(index: number): void;
}

const Counter = ({number, color, index, onIncrement, onDecrement, onSetColor}: IProps): JSX.Element => {
    return (
        <div 
            className="Counter"
            onClick={() => onIncrement(index)}
            onContextMenu={(e: { preventDefault(): void }): void => {
                e.preventDefault();
                onDecrement(index);
            }}
            onDoubleClick={() => onSetColor(index)}
            style={{
                backgroundColor: color
            }}>{number}</div>
    )
};

Counter.defaultProps = {
    index: 0,
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined'),
}

export default Counter;