import React, { useState } from 'react'
import AgregarCategoria from './components/AgregarCategoria';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

    //const categorias = ['Dragon Ball','Death Note','One Piece','Slam Dunk'];
    const [categorias, setCategorias] = useState(['FullMetal Alchemist']) 

    // const handleAgregar = () => {
    //     setCategorias( cats =>[...cats, 'FullMetal Alchemist'] );
    //     //con esto agrego una nueva categoria a el anterior array
    // }
    return (
        <div>
            <h2>Gif Expert App</h2>
            <hr/>
            <AgregarCategoria setCategorias={ setCategorias }/>
            <hr/>
            <ol>
                {
                    categorias.map( cat => {
                        return <GifGrid 
                        categoria={ cat }
                        key={ cat } 
                        />
                    })
                }
            </ol>  
        </div>
    )
}
export default GifExpertApp;