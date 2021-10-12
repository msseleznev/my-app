import React from "react";
import { NavLink } from "react-router-dom";
import c from './Dialogs.module.css';



const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        < div className={c.dialog}>
            <img src={props.avatar} />
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


    let newMessageElement = React.createRef(); //просим React создать ссылку

    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text);

    }
    let onMessageChange = () =>{
        let text = newMessageElement.current.value;
        props.updateNewMessageText (text);
    };

    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id} avatar={d.avatar} />) // Преобразовываем массив имен dialogsData в массив элементов dialogsElement
    let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} />) //Преобразовываем массив сообщений messagesData в массив элементов messagesElement

    return (
        < div className={c.dialogs} >
            <div className={c.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={c.messages}>
                {messagesElement}
                <textarea ref={newMessageElement}
                          value={props.dialogsPage.newMessageText}
                          onChange={onMessageChange}/>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>

            </div>

        </div >
    )
}
export default Dialogs;