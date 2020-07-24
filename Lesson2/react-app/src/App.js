import React, {useState} from 'react'
import {Route} from 'react-router-dom'
import HelloComponent from './Components/HelloComponent/HelloComponent'
import Nav from './Components/Nav/Nav'
import AboutUs from './Components/AboutUs/AboutUs'
import {Context} from './context'

function App() {
    const [text, setText] = useState('initial text')
    const Change = (text) => {
        setText(text)
    }
    return <div>
        <Context.Provider value={{Change}}>
            <Nav/>  
            <Route path='/hello' component={HelloComponent}/>
            <Route path='/about-us' component={AboutUs}/>

<button> {text} </button>
        </Context.Provider>
    </div>
}

export default App