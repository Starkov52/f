import React from 'react'

function adviceComponent({title, description}) {
    return(
        <div>
            <div className="advice__item">
            <h1 className="advice__title">{title}</h1>
            <p className="advice__description">{description}</p>
            </div>
        </div>
    )
}
export default adviceComponent