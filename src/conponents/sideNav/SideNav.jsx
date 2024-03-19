import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={el.link} key={key} className='sideNav__link'>
          <div className='sideNav__icon'
            style={{ background: active === el.icon ? '#FA9E31' : '' }}
          >
            {el.icon}
          </div>
        </Link>
      ))}
    </div>
    </>
    );
  };

export default SideNav;
