import React from 'react'
import Appleft from './comps/Appleft'
import Appright from './comps/Appright'
import NewApp from './comps/NewApp'

function Container() {
    return ( <
        div className = 'container' >
        <
        NewApp / >
        <
        Appleft / >
        <
        Appright / >
        <
        /div>
    )
}

export default Container