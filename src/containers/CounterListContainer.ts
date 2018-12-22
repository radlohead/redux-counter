import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';
import getRandomColor from '../lib/getRandomColor';
import { Action } from 'redux';

const mapStateToProps = (state: {counters: {[key: string]: string|number}}) => ({
    counters: state.counters
});

const mapDispatchToProps = (dispatch: React.Dispatch<Action>) => ({
    onIncrement: (index: number) => dispatch(actions.increment(index)),
    onDecrement: (index: number) => dispatch(actions.decrement(index)),
    onSetColor: (index: number) => {
        const color: string = getRandomColor();
        dispatch(actions.setColor({index, color}));
    }
});

const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);

export default CounterListContainer;