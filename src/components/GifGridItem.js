import React from 'react'
//aqui destructuramos img porque al parecer venia dentro de otro img desde el gifgrid
export const GifGridItem = ( {img} ) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={img.url}  alt={img.title}/>
            <p>{img.title}</p>
        </div>
    )
}
export default GifGridItem;