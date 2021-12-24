import React from 'react';
import './Navbar.css';

function Navbar(){
    return(
        <div className='navbar'>
            <img className='logo' src="images/logo.png" alt='logo'/>
            <img className='avatar' src="images/avatar.png" alt='avatar'/>
        </div>
    )
}

export default Navbar;