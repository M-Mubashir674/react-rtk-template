import React from 'react';
import {NavLink} from "react-router-dom";

import {Logo} from "src/constants/icons.js";
import reactLogo from "src/assets/react.svg";
import viteLogo from '/vite.svg'


const About = () => {
    return (
        <div className="about-wrapper">
            <Logo className="company-logo"/>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <p>
                    React template with Vite, React, RTK Query and React Toastify by M.Mubashir
                </p>
            </div>
            <p className="read-the-docs">
                <NavLink to={"/signin"} >Login</NavLink>
            </p>
        </div>
    );
};

export default About;
