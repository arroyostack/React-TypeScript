import { useReducer } from "react";

const initialState = {
    counter: 10,
};

type ActionType =
    | { type: 'increment'; }
    | { type: 'decrement'; }
    | { type: 'custom', payload: number; }
    | { type: 'reset'; };

const counterReducer = ( state: typeof initialState, action: ActionType ) => {
    switch ( action.type ) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1
            };

        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1

            };
        case 'custom':
            return {
                ...state,
                counter: action.payload

            };
        case 'reset':
            return {
                ...state,
                counter: initialState.counter

            };
        default:
            return state;
    }
};


export const UseReducerCounter = () => {
    // If more arguments 
    const [ counterState, dispatch ] = useReducer( counterReducer, initialState );

    return (
        <>
            <h1 className="text-info">Counter useReducer</h1>
            <h2>Counter: { counterState.counter }</h2>
            <br />
            <button
                onClick={ () => dispatch( { type: 'increment' } ) }
                className="btn btn-outline-info m-1">Increment + 1</button>
            <button
                onClick={ () => dispatch( { type: 'decrement' } ) }
                className="btn btn-outline-info m-1">Increment - 1</button>
            <button
                onClick={ () => dispatch( { type: 'custom', payload: 123456789 } ) }
                className="btn btn-outline-info m-1">Set to 123456789</button>
            <button
                onClick={ () => dispatch( { type: 'reset' } ) }
                className="btn btn-outline-info m-1">Reset Counter</button>
        </>
    );
};
