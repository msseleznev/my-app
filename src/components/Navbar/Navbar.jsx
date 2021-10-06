import React from "react";
import { NavLink } from "react-router-dom";
import c from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to='/profile' activeClassName={c.active}> Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/dialogs' activeClassName={c.active}>Message</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/news' activeClassName={c.active}>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/music' activeClassName={c.active}> Music</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;