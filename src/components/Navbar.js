import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

let Navbar = () => {

    let [click, setClick] = useState(false); // Sets state of 'click' as 'false'. 'setClick' will be used to update the state of 'click' whenever needed.
    let [button, setButton] = useState(true);

    let handleClick = () => { // Reverses the state of 'click' when clicked
        setClick(!click);
    }

    let closeMobileMenu = () => { // Sets the state of 'click' to 'false' when clicked. This closes the Navbar Menu.
        setClick(false);
    }

    let showButton = () => {
        if(window.innerWidth <= 992) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect( () => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        TRVL 
                            <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
                        <li className='navbar-menu-item'>
                            <Link to='/' className='navbar-menu-link' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='navbar-menu-item'>
                            <Link to='/services' className='navbar-menu-link' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='navbar-menu-item'>
                            <Link to='/products' className='navbar-menu-link' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='navbar-menu-item'>
                            <Link to='/sign-up' className='navbar-menu-link-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn-outline'>Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;