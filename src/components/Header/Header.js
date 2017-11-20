import React from 'react';
import './Header.css';
import logoUr from '../../assets/logo.svg';

const Header = () =>(
    <div className="header">
        <img src={logoUr} alt="Tesla" />
    </div>
)


export default Header;