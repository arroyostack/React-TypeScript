import React, { ChangeEvent, useState } from 'react';

export const FormStateSimple = () => {

    const [ form, setForm ] = useState( {
        email: '',
        name: ''
    } );

    const handelChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = target;

        setForm( {
            ...form,
            [ name ]: value
        } );
    };


    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="" className="form-label"></label>
                    <input
                        name="email"
                        type="email"
                        onChange={ handelChange }
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="" className="form-label"></label>
                    <input
                        name="name"
                        type="text"
                        onChange={ handelChange }
                        className="form-control"
                    />
                </div>

                { JSON.stringify( form ) }

            </form>
        </>
    );
};