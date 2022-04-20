import './App.css';
import MainPage from "./mainPage/MainPage";
// import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Header from "./header/Header";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<MainPage/>} />
            <Route eact path='/header' element={<Header/>} />
        </Routes>
    </BrowserRouter>;
}

export default App;
