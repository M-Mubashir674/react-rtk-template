import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {useLoginMutation} from "src/features/auth/authSlice.js";
import {SetUser} from "src/features/auth/authReducer.js";

import "./login.scss"

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [login,{isLoading}] = useLoginMutation();
    const Dispatch = useDispatch();

    const handleLogin = async () => {
        const resp = await login({
            email: emailRef.current.value,
            password: passwordRef.current.value
        });
        if(resp.data){
            Dispatch(SetUser(resp.data));
            navigate("/admin");
        }
    }

    return (
        <div className="login-wrapper">
            <h1>Login</h1>
            <input type="email" ref={emailRef} />
            <input type="password" ref={passwordRef} />
            <button onClick={handleLogin} disabled={isLoading}>{ isLoading ? "Loading..." : "Login"}</button>
        </div>
    );
};

export default Login;
