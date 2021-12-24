import React from 'react';
import NavBar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action,originals} from './urls'
import './App.css'

function App(){
    return(
        <div className='App'>
            <NavBar />
            <Banner />
            <RowPost title="Netflix Originals" link={originals}/>
            <RowPost title="Action" isSmall link={action}/>
        </div>
    )
}

export default App;