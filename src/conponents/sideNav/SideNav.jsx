import React from 'react';
import SideNavComponent, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { IoHomeOutline } from 'react-icons/io5';
import './SideNav.scss'
import {useNavigate } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";

const SideNav = () => {
    const navigate = useNavigate();
  
    return (
      <SideNavComponent
        className="side-nav"
        expanded={false}
        onSelect={(selected) => {
          console.log(selected);
          navigate('/' + selected);
        }}
      >
        <SideNavComponent.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon className="side-nav__navIcon">
              <IoHomeOutline className='side-nav__icon' />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
        </SideNavComponent.Nav>
  
        <SideNavComponent.Nav defaultSelected="search">
          <NavItem eventKey="search">
            <NavIcon className="">
              <BsSearch className='side-nav__icon' />
            </NavIcon>
          </NavItem>
        </SideNavComponent.Nav>

      </SideNavComponent>
    );
  };

export default SideNav;
