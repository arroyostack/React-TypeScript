import React, { ChangeEvent, useState } from 'react';
import { useForm } from '../../hooks/useForm';

interface FormData {
    email: string,
    name: string;
    age?: number;
}

export const FormCustomHook = () => {
    const { email, name, age, form, handleChange } = useForm<FormData>( {
        email: '',
        name: '',
        age: 40

    } );

    return (
        <>
            <h1>Form with custom Hook</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input
                        name="email"
                        type="email"
                        onChange={ handleChange }
                        value={ email }
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="" className="form-label">Name</label>
                    <input
                        name="name"
                        type="text"
                        onChange={ handleChange }
                        value={ name }
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Age</label>
                    <input
                        name="age"
                        type="number"
                        onChange={ handleChange }
                        value={ age }
                        className="form-control"
                    />
                </div>
            </form>
        </>
    );
};