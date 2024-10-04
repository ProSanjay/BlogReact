import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null
}


const authSlice = createSlice({
    name :"auth",
    initialState,
    reducers : {
        logIn : (state,action) =>{
                 state.status = true
                 state.userData = action.payload
        },
        logout : (state,action) =>{
            state.status = false
        }
    }
})


export const {logIn,logout} = authSlice.actions

export default authSlice