import React from "react";
import { NavLink } from "react-router-dom";
import c from './Dialogs.module.css';



const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        < div className={c.dialog}>
            <NavLink to={path} activeClassName={c.active}>{props.name}</NavLink>
        </div >
    )
}
const Message = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />) // Преобразовываем массив имен dialogsData в массив элементов dialogsElement 
    let messagesElement = props.state.messages.map(m => <Message message={m.message} />) //Преобразовываем массив сообщений messagesData в массив элементов messagesElement
    return (
        < div className={c.dialogs} >
            <div className={c.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={c.messages}>
                {messagesElement}
            </div>
        </div >
    )
}
export default Dialogs;