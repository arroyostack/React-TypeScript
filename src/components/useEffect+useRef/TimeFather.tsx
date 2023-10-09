import { useState } from 'react';
import { Timer } from './Timer';

export const TimeFather = () => {

    const [ miliSeconds, setMiliSeconds ] = useState( 1000 );

    return (
        <>
            <span>Miliseconds: { miliSeconds }</span>


            <button
                className="btn btn-outline-success m-2"
                onClick={ () => setMiliSeconds( 2000 ) }
            >2000</button>

            <button
                className="btn btn-outline-success m-2"
                onClick={ () => setMiliSeconds( 3000 ) }
            >3000</button>

            <button
                className="btn btn-outline-success m-2"
                onClick={ () => setMiliSeconds( 4000 ) }
            >4000</button>

            <Timer miliseconds={ miliSeconds } />


        </>
    );
};
