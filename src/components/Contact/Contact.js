import React from 'react';
import styles from './Contact.module.css'
import {useDispatch} from "react-redux";
import {
    changeFirstNameId,
    changeLastNameId,
    changePhoneId,
    deleteId,
    openEditId,
    saveEditId
} from "../../store/ContactsAction";
const Contact = ({contact}) => {
    const dispatch=useDispatch()
    return (
        <li className={styles.contact}>
            {contact.edit?
                <div>
                    <input style={{borderColor: contact.errors.errorFirstName?'red':'white'}}
                           onChange={e=>dispatch(changeFirstNameId({firstName:e.target.value,id:contact.id}))}
                           className={styles.text} type='text' placeholder="Имя"  value={contact.firstName}/>
                    <input style={{borderColor:contact.errors.errorLastName?'red':'white'}}
                           onChange={e=>dispatch(changeLastNameId({lastName:e.target.value,id:contact.id}))}
                           className={styles.text} type='text' placeholder="Фамилия"  value={contact.lastName}/>
                </div>:
                <div>
                    <input className={styles.text} type='text' disabled value={contact.firstName}/>
                    <input className={styles.text} type='text' disabled value={contact.lastName}/>
                </div>}
            {contact.edit?
                <input style={{borderColor:contact.errors.errorPhone?'red':'white'}}
                       onChange={e=>dispatch(changePhoneId({phone:e.target.value,id:contact.id}))}
                       className={styles.text} type='text' placeholder="Телефон" value={contact.phone}/>:
                <input  className={styles.text} type='text' disabled value={contact.phone}/>}
            <div>
                <button onClick={()=>dispatch(deleteId({id:contact.id}))} className={[styles.button,styles.red].join(" ")}>Удалить</button>
                {!contact.edit?<button onClick={()=>dispatch(openEditId({id:contact.id}))}
                                      className={styles.button}>Изменить</button>:
                    <button onClick={()=>dispatch(saveEditId({id:contact.id}))}
                            className={styles.button}>Сохранить</button>}
            </div>
        </li>
    );
};

export default Contact;