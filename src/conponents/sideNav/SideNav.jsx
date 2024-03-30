import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideNav.scss'
import { SideNavDate } from '../sideNavData/SideNavDate';
import logo from '../../asset-img/logo.png'
const SideNav = () => {
 const [active,setActive]=useState('')

    return (
      <>
      <div className="sideNav">
      <div className="sideNav__logo">
        <img src={logo} alt="logo" className="sideNav__logo-img" />
      </div>
      {SideNavDate.map((el, key) => (
        <NavLink to={el.link} key={key} className={({isActive})=>isActive? 'active-link':'link'}>
          <div className='sideNav__icon' >
            {el.icon}
          </div>
       </NavLink>
      ))}
    </div>
    </>
    );
  };

export default SideNav;
