import React, { useState, useEffect, Fragment } from 'react';
import '../css/homepage.css';
import book from '../imgs/book.png'

function Homepage() {

    const [isUser, setUser] = useState({
        username: "",
        password: ""
    });

    function onChangeUser(e) {
        setUser({ ...isUser, username: e.target.value })
    }

    function onChangePass(e) {
        setUser({ ...isUser, password: e.target.value })
    }

    function submit() {
        console.log(isUser)
    }

    return (
        <Fragment>
            <div className="homepageDiv">
                <div className="form">
                    <h1>SkillShare</h1>
                    <h2>Username</h2>
                    <div className="inputDiv">
                        <input className="input" onChange={(e) => onChangeUser(e)}></input>
                    </div>
                    <h2>Password</h2>
                    <div className="inputDiv">
                        <input className="input" onChange={(e) => onChangePass(e)}></input>
                    </div>
                </div>
                <div className="bookImgDiv">
                    <img src={book} className="bookImg"></img>
                </div>
                <div className="submit" onClick={() => submit()}>
                    Login
                </div>
                <div className="register">Don't have an account? Register Here!</div>
            </div>
        </Fragment>
    );
}

export default Homepage;