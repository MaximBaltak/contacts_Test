import {createSlice} from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{
        inputLogin:'',
        inputPassword:'',
        auth:false,
        error:''
    },
    reducers:{
        changeLogin(state,{payload}){
            state.inputLogin=payload.login
        },
        changePassword(state,{payload}){
            state.inputPassword=payload.password
        },
        authYes(state){
            state.auth=true
        },
        authNo(state){
            state.auth=false
        },
        submit(state){
            if(!state.inputLogin||!state.inputPassword){
                state.error='Поля не могут быть пустыми'
            }else {
                localStorage.setItem('token','8388383')
                state.auth=true
                state.inputPassword=''
                state.inputLogin=''
            }
        },
        exit(state){
            localStorage.clear()
            state.auth=false
        }
    }
})
export const{changePassword,changeLogin,authYes,authNo,exit,submit}=userSlice.actions
export default userSlice.reducer