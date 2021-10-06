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
    let dialogs = [         //хардкодим массив имен пользователей, в будущем этот массив будет подгружаться извне
        { id: 1, name: 'Sveta' },
        { id: 2, name: 'Maks' },
        { id: 3, name: 'Sanya' },
        { id: 4, name: 'Anjelika' },
        { id: 5, name: 'Kris' }
    ]
    let messages = [        //хардкодим массив сообщений, в будущем этот массив будет подгружаться извне
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'What your name?' },
        { id: 3, message: "I'm Nick" }

    ]
    let dialogsElement = dialogs.map(d => <DialogsItem name={d.name} id={d.id} />) // Преобраховываем массив имен dialogsData в массив элементов dialogsElement 
    let messagesElement = messages.map(m => <Message message={m.message} />) //Преобраховываем массив сообщений messagesData в массив элементов messagesElement

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