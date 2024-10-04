import React from "react";
import authServiceObj from "../appWrite/auth/auth";
import { useDispatch } from "react-redux";
import {logout as reduxLogout} from '../store/AuthSlice'
import { useNavigate } from "react-router-dom";

function LogOutBtn(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOutHandler = () =>{
        authServiceObj.logOut()
        dispatch(reduxLogout())
        navigate("/login")
    }
    return (
    <>
    <button onClick={logOutHandler}>Log out</button>
    </>
    )
}

export default LogOutBtn