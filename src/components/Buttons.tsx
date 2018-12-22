import * as React from 'react';

import './Buttons.css';

interface IButtons {
    onCreate(): void;
    onRemove(): void;
}

const Buttons = ({onCreate, onRemove}: IButtons) => {
    return (
        <div className="Buttons">
            <div className="btn add" onClick={onCreate}>생성</div>
            <div className="btn remove" onClick={onRemove}>제거</div>
        </div>
    );
}

Buttons.defaultProps = {
    onCreate: () => console.warn('onCreate not defined'),
    onRemove: () => console.warn('onRemove not defined')
};

export default Buttons;