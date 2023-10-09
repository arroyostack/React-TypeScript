import { useEffect, useRef, useState } from 'react';

type TimerProps = {
    miliseconds: number;
    seconds?: number;
};

export const Timer = ( { miliseconds }: TimerProps ) => {

    const [ seconds, setSeconds ] = useState( 0 );

    // ref require to be type '<NodeJS.Timeout>' to work since we are assigning ref.current to a 'setInterval' function on our 'useEffect'.
    const ref = useRef<NodeJS.Timeout>();

    useEffect( () => {
        // Clear interval if exist. This can be done in the 'useEffect' return statement.
        ref.current && clearInterval( ref.current );
        // Interval will be change any time there is a change in 'miliseconds' variable.
        ref.current = setInterval( () => setSeconds( previousValue => previousValue + 1 ), miliseconds );

    }, [ miliseconds ] );

    return (
        <>
            <h4>Timer <small>{ seconds }</small></h4>

            <button
                onClick={ () => setSeconds( 1 ) }
                className="btn btn-outline-danger">Reset</button>
        </>
    );
};
