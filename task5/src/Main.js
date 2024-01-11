import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import './Main.css';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';

const Main = () =>{
    let [content, setContent] = useState("")
    let [isClose, setIsClose] = useState(false)
    let navigate = useNavigate();


    const loadContent = (val) =>{
        if (val === 1){
            navigate("/login")
        }
        else if (val === 2){
            setContent(<SignUp/>)
        }
        else{
            setContent()
        }
    }

    return <div>
        <div className="Header">
            <div className='headerBtnBack'>
            <p className="loginBtn" onClick={() => loadContent(1)}> Log in</p>
            <p className="SignupBtn" onClick={() => loadContent(2)}>Sign Up</p>
        </div>
        <div className='popupContainer'>
            <Link to={"/homepage"}>Goto Homepage</Link>
            <a href="/homepage">A Tag Homepage</a>
           {content}</div>
        </div>
    </div>
} 

export default Main;