import React from 'react'
import { IoHomeOutline } from 'react-icons/io5';
import { BsSearch } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import './SideNavDate.scss'
import Home from '../../pages/home/Home'

export const SideNavDate = [
    {
        icon : <IoHomeOutline className='icon'/>,
        link : '/home'
    }, 
    {
        icon : <BsSearch className='icon'/>,
        link : '/search'
    },
    {
        icon : <IoPersonCircleOutline className='icon' />,
        link : '/profile'
    }
    
]


