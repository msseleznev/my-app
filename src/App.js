import React from 'react';
import {Route} from 'react-router';

import './App.css';
import Dialogs from './components/Navbar/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
import {updateNewMessageText} from "./redux/state";


// import Footer from './components/Footer/Footer';


const App = (props) => {


    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.friendsPage}/>
            <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                          updateNewPostText={props.updateNewPostText}
                                                          addPost={props.addPost}/>}/>
            <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                                          addMessage={props.addMessage}
                                                          updateNewMessageText = {props.updateNewMessageText}/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>

            {/* <Footer /> */}
        </div>

    );
}


export default App;
