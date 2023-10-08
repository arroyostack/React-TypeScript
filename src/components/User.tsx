import { useState } from "react";

interface User {
    name: string;
    uid: number;
}


export const User = () => {
    const [ user, setUser ] = useState<User>();

    const login = () => {
        setUser( {
            name: 'Richard',
            uid: 265363563
        } );
    };

    return (
        <div>
            <h3>Usuario: useState</h3>
            { user?.name }
            { user?.uid }


            <button
                onClick={ login }
                type="button"
                className="btn btn-outline-primary">Login</button>

            (!user)
            ? <pre>There is no user</pre>
            : <pre>{ JSON.stringify( user ) }</pre>

        </div>
    );
};
