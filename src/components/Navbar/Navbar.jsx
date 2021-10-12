import React from "react";
import { NavLink } from "react-router-dom";
import c from './Navbar.module.css';


const Friends = (props) => {
    return (
        <div className={c.friends}>
            <img src={props.avatar} />
            {props.name}
        </div>

    )
}


const MyFriends = (props) => {
    let friendsElement = props.friends.map(f => <Friends name={f.name} avatar={f.avatar} />)
    return (

        < div className={c.item} >
            <h3>Friends</h3>
            <div className={c.friends}>
                {friendsElement}
            </div>

        </div >
    )
}

const Navbar = (props) => {

    // let friendsElement = props.friends.map(p => <Posts message={p.message} likesCount={p.likesCount} ava={p.ava} />)
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to='/profile' activeClassName={c.active}> Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/dialogs' activeClassName={c.active}>Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/news' activeClassName={c.active}>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/music' activeClassName={c.active}> Music</NavLink>
            </div>

            <MyFriends friends={props.state.friends} />



        </nav>
    )
}

export default Navbar;