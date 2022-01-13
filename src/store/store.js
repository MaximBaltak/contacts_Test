import {configureStore} from "@reduxjs/toolkit";
import userSlice from './UserAction'
import contactsSlice from './ContactsAction'
const store =configureStore({
    reducer:{
        user: userSlice,
        contacts: contactsSlice,
    },
    devTools:true
})
export default store