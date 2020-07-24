import React, {useState, useRef, useEffect, useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {Context} from './../../context'

function Nav() {
    const {Change} = useContext(Context)
    const [classActive, setClassActive] = useState(false)
    useEffect(() => {
        console.log('component update')
    return () => {
        //componentWillUnmount
    }
}, [classActive])
    const clickHandler = () => {
        setClassActive(!classActive)
        // ref.current.className === 'active' ? ref.current.className = 'no-active' : ref.current.className = 'active'
    }
    const ref = useRef()
    return <ul>
        <li className={classActive ? 'active' : 'no-active'}>
            {/* <NavLink onClick={clickHandler} to='/about-us' > About Us </NavLink> */}
            <NavLink onClick={() => Change('change from context')} to='/about-us' > About Us </NavLink>
        </li>
        <li ref={ref}>
            <NavLink to='/hello' > Hello Component </NavLink>
        </li>
    </ul>
}

export default Nav