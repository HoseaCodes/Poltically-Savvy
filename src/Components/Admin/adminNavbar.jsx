import React from 'react'

import Avatar from '../../Images/anime.jpg'
import './adminNavbar.css';

const AdminNavbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a href="">Subscribers</a>
                <a href="">Video Management</a>
                <a className="active_link" href="">Admin</a>
            </div>
            <div className="navbar__right">
                <a href="">
                    <i className="fa fa-search"></i>
                </a>

                <a href="">
                    <i className="far fa-clock"></i>
                </a>

                <a href="">
                    <img width="30px" src={Avatar} alt="avatar" />
                </a>

            </div>
        </nav>
    )
}

export default AdminNavbar;