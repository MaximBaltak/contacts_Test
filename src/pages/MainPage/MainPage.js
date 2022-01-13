import React from 'react';
import styles from './MainPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeLogin, changePassword, submit} from "../../store/UserAction";
const MainPage = () => {
    const inputLogin=useSelector(state=>state.user.inputLogin)
    const inputPassword=useSelector(state=>state.user.inputPassword)
    const error=useSelector(state=>state.user.error)
    const dispatch=useDispatch()

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Авторизация</h2>
            {error? <p>{error}</p>:null}
            <input value={inputLogin} onChange={e=>dispatch(changeLogin({login:e.target.value}))} className={styles.input} type="text" placeholder="логин"/>
            <input value={inputPassword} onChange={e=>dispatch(changePassword({password:e.target.value}))} className={styles.input} type="password" placeholder="пароль"/>
            <button onClick={()=>dispatch(submit())} className={styles.button}>Войти</button>
        </div>
    );
};

export default MainPage;