import { useState } from 'react';

export const Counter = () => {

    const [ counter, setCounter ] = useState( 0 );

    const increment = ( value: number = 1 ): void => {
        setCounter( counter + value );
    };

    return (
        <div className="mt-5">
            <h3>Counter: useState</h3>
            <span>Value: { counter }</span>
            <button
                className="btn btn-outline-primary ms-3"
                onClick={ () => increment() }>+1
            </button>
            <button
                className="btn btn-outline-primary ms-3"
                onClick={ () => increment( 5 ) }>+2
            </button>
        </div>
    );
};
