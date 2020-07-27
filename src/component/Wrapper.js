import React from 'react';
import "../style/Wrapper.css"
//add css here

function Wrapper({children}) {
    return (
    <div className="wrapper">
        { children }
    </div>
    )
}

export default Wrapper