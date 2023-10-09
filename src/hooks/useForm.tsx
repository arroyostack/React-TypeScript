import { ChangeEvent, useState } from 'react';


export const useForm = <T extends Object>( initialState: T ) => {

    const [ form, setForm ] = useState( initialState );

    const handleChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = target;
        console.log( "🚀 ~ file: useForm.tsx:10 ~ handleChange ~  name, value:", name, value );

        setForm( {
            ...form,
            [ name ]: value
        } );
    };

    return {
        // form is not neccesary to return, only for display purposes.
        form,
        handleChange,
        // Destructure all properties from the form, thus making them available to destructure where useForm is used.
        ...form
    };

};
