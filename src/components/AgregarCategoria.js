import React, { useState } from 'react'

export const AgregarCategoria = ({ setCategorias }) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue( e.target.value )
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length> 2 ) {
            //aqui ordenamos que el ultimo sea primero
            setCategorias( cats => [ inputValue, ...cats  ] );
            setInputValue('');
        }
    }
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
            <button type="submit" class="button">AGREGAR CATEGORIA</button>
        </form>
    )
}
export default AgregarCategoria;
