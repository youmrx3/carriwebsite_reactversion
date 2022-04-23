import React from 'react';
import {useNavigate} from 'react-router-dom'
import { signIn } from './NavBarModule';
import logo from '../../Ressources/logo.png';
import './NavBar.css'
import CustomPopUp from '../CustomPopUp/CustomPopUp';

export default function NavBar(){
   
    return (
<div className="nv">

<nav className="navbar navbar-dark  fixed-top" >
    <a className="navbar-brand"  href="/">
        <img src={logo} width="80" height="80"  className=" logo d-inline-block align-top" alt=""/>
    </a>
    

    <div className="buttons">    
    <CustomPopUp></CustomPopUp>
    </div>

</nav>

</div>)


}