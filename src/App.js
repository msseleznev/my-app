import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Navbar/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
// import Footer from './components/Footer/Footer';


const App = (props) => {
    
    
    return (
        <BrowserRouter >
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <Route path='/profile' render={() => <Profile state={props.state.profilePage} />} />
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                {/* <Footer /> */}
            </div>
        </BrowserRouter>
    );
}




export default App;
