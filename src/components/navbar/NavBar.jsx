import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const NavBar = () => {
  const {setTheme} = useContext(ThemeContext);
    return (
      <div className="navbar-container">
        <div>
        <Link to={'/'} className='logo' >ChicArt</Link>
        </div>
        <button className='button' onClick={() =>setTheme((currentValue)=> currentValue === 'light' ? 'dark' : 'light')}>tema</button>
        <div >
            
                
                    <ul className="list-container">
                    <li><NavLink  to={"/category/pulceras"} className='button'>Pulceras</NavLink></li>
                
                <li><NavLink to={"/category/anillos"}className='button'>Anillos</NavLink></li>
            
                <li><NavLink to={"/category/collares"} className='button'>collares</NavLink></li>
            
                <li><NavLink to={"/category/aretes"} className='button'>Aretes</NavLink></li>
           
                    </ul>
        </div>
        <CartWidget/>
        </div>
        
    )
  }
  
  export default NavBar 