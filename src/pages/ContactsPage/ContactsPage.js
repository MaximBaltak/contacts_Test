import React from 'react';
import styles from './ContactsPage.module.css'
import Contact from "../../components/Contact/Contact";
import {useDispatch, useSelector} from "react-redux";
import {
    addContact,
    changeFirstName,
    changeLastName,
    changePhone,
    changeSearch,
    clear
} from "../../store/ContactsAction";
import {exit} from "../../store/UserAction";
const ContactsPage = () => {
    const dispatch=useDispatch()
    const inputFirstName=useSelector(state=>state.contacts.inputFirstName)
    const inputLastName=useSelector(state=>state.contacts.inputLastName)
    const inputSearch=useSelector(state=>state.contacts.inputSearch)
    const inputPhone=useSelector(state=>state.contacts.inputPhone)
    const filterContacts=useSelector(state=>state.contacts.filterContacts)
    return (
        <div className={styles.container}>
            <button onClick={()=>dispatch(exit())} className={styles.addButton}>Выйти</button>
            <input value={inputSearch} onChange={e=>dispatch(changeSearch({search:e.target.value}))} className={styles.search}  type="text" placeholder="Поиск по имени"/>
            <div className={styles.add}>
                <input value={inputFirstName} onChange={e=>dispatch(changeFirstName({firstName:e.target.value}))} className={styles.search} type="text" placeholder="Имя"/>
                <input value={inputLastName} onChange={e=>dispatch(changeLastName({lastName:e.target.value}))} className={styles.search} type="text" placeholder="Фамилия"/>
                <input value={inputPhone} onChange={e=>dispatch(changePhone({phone:e.target.value}))} className={styles.search} type="tele" placeholder="Телефон"/>
            </div>
            <div className={styles.add}>
                <button onClick={()=>dispatch(addContact())} className={styles.addButton}>Добавить</button>
                <button onClick={()=>dispatch(clear())} className={styles.addButton}>Удалить всё</button>
            </div>
            <ul className={styles.ul}>
                {filterContacts.map(contact=><Contact key={contact.id} contact={contact}/>)}
            </ul>
        </div>
    );
};

export default ContactsPage;