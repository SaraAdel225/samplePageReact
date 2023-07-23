import './App.css';
import ReactDOM from 'react-dom';
import React from "react";
import Header from "./component/Header/Header"
import Home from "./component/Home/HomeP"
import Companies from "./component/Companies/Companies"
import Residencies from './component/Residenes/Residenes'
import Value from "./component/Value/Value"
import Contact from './component/Contact/Contact';
import Blue from './component/BlueBlock/Blue';
import Footer from './component/Footer/Footer'

class App extends React.Component{
    render(){
        return (
            <div className='App'>
                <div>
                    <div className='light'/>
                    <Header/>
                    <Home/>
                </div>
                <Companies/>
                <Residencies/>
                <Value/>
                <Contact/>
                <Blue/>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"))
export default App;
