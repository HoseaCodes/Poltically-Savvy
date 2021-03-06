import React, { useState } from "react";

import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Post from '../../Images/anime.jpg';
import "./DropDownMenu.css"

// Bolierplate dropdown
const DropDownMenu = () => {

    const [activeMenu] = useState('main')

    return (
        <div className="dropdown">
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} className="menu-primary">
                <div className="menu">
                    <Link to="/blog" className="dropdown-item">Blog Tag 1</Link>
                    <Link to="/blog" className="dropdown-item">Blog Tag 2 </Link>
                    <Link to="/blog" className="dropdown-item">Blog Tag 3</Link>
                    <Link to="/blog" className="dropdown-item">Blog Tag 4</Link>
                    <ul className="menu-column-post">
                        <li className="menu-post">
                            <img src={Post} alt="Post 1" width="180px" />
                            <h5>Post Title</h5>
                        </li>
                        <li className="menu-post">
                            <img src={Post} alt="Post 1" width="180px" />
                            <h5>Post Title</h5>
                        </li>
                        <li className="menu-post">
                            <img src={Post} alt="Post 1" width="180px" />
                            <h5>Post Title</h5>
                        </li>
                        <li className="menu-post">
                            <img src={Post} alt="Post 1" width="180px" />
                            <h5>Post Title</h5>
                        </li>
                        <li className="menu-post">
                            <img src={Post} alt="Post 1" width="180px" />
                            <h5>Post Title</h5>
                        </li>
                    </ul>
                </div>


            </CSSTransition>
        </div>

    )
}

export default DropDownMenu;