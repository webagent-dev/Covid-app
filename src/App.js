import React, {
    useState
} from 'react'
import Container from './Container'
import New from './comps/other/New'
import './App.css'
import news from './data'

function App() {
    const [index, setIndex] = useState(0)
    const [data, setData] = useState(news)[index]
    return ( <
        div className = 'App' >
        <
        New list = {
            data
        }
        / > <
        Container / >
        <
        /div>
    )
}

export default App