import * as React from 'react';
import './Counter.css';

interface IProps {
    number: any;
    color: any;
    onIncrement(): void;
    onDecrement(): void;
    onSetColor(): void;
}

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}: IProps): JSX.Element => {
    return (
        <div 
            className="Counter"
            onClick={onIncrement}
            onContextMenu={(e: any): void => {
                e.preventDefault();
                onDecrement();
            }}
            onDoubleClick={onSetColor}
            style={{
                backgroundColor: color
            }}>{number}</div>
    )
}

export default Counter;