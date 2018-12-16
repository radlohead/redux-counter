import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function getRandomColor(): string {
    const colors: string[] = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9',
        '#7048e8',
        '#4263eb'
    ];

    const random: number = Math.floor(Math.random() * 6);
    
    return colors[random];
}

interface IMapStateToProps {
    color: string;
    number: number;
}

const mapStateToProps = (state: IMapStateToProps|any): {[key: string]: string|number} => ({
    color: state.colorData.color,
    number: state.numberData.number
});

interface IMapDispatchToProps {
    type: string;
}

const mapDispatchToProps = (dispatch: Dispatch<IMapDispatchToProps>) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

const CounterContainer: any = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;