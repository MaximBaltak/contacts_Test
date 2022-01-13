import {createSlice} from "@reduxjs/toolkit";

const contactsSlice=createSlice({
    name:'contacts',
    initialState:{
        inputFirstName:'',
        inputLastName:'',
        inputPhone:'',
        inputSearch:'',
        error:'',
        filterContacts:[],
        Contacts:[],
    },
    reducers:{
        changeFirstName(state,{payload}){
            state.inputFirstName=payload.firstName
        },
        changeFirstNameId(state,{payload}){
            state.filterContacts.forEach(contact=>{
                if(contact.id===payload.id){
                    contact.firstName=payload.firstName
                }
            })
        },
        changeLastName(state,{payload}){
            state.inputLastName=payload.lastName
        },
        changeLastNameId(state,{payload}){
            state.filterContacts.forEach(contact=>{
                if(contact.id===payload.id){
                    contact.lastName=payload.lastName
                }
            })
        },
        changePhone(state,{payload}){
            state.inputPhone=payload.phone
        },
        changePhoneId(state,{payload}){
            state.filterContacts.forEach(contact=>{
                if(contact.id===payload.id){
                    contact.phone=payload.phone
                }
            })
        },
        openEditId(state,{payload}){
            state.filterContacts.forEach(contact=>{
                if(contact.id===payload.id){
                    contact.edit=!contact.edit
                }
            })
        },
        saveEditId(state,{payload}){
            state.filterContacts.forEach(contact=>{
                if(contact.id===payload.id){
                    if(!contact.firstName){
                        contact.errors.errorFirstName=true
                    }else {
                        contact.errors.errorFirstName=false
                    }
                    if(!contact.lastName){
                        contact.errors.errorLastName=true
                    }else {
                        contact.errors.errorLastName=false
                    }
                    if(!contact.phone){
                        contact.errors.errorPhone=true
                    }else {
                        contact.errors.errorPhone=false
                    }

                    if(!contact.errors.errorFirstName&&!contact.errors.errorLastName&&!contact.errors.errorPhone){
                        contact.edit=!contact.edit
                    }

                }
            })
        },
        changeSearch(state,{payload}){
            let filterContacts=[]
            state.inputSearch=payload.search
            state.Contacts.forEach(contact=>{
                if(contact.firstName.includes(state.inputSearch)){
                    filterContacts.unshift(contact)
                }
            })
            state.filterContacts=[...filterContacts]
            if(state.filterContacts.length===0){
                state.filterContacts=[...state.Contacts]
            }
        },
        addContact(state){
            if(!state.inputFirstName||!state.inputLastName||!state.inputPhone){
                state.error='Поля не должны быть пустыми'
            }else {
                const contact={
                    id:Math.floor(Math.random()*1000),
                    firstName:state.inputFirstName,
                    lastName:state.inputLastName,
                    phone:state.inputPhone,
                    errors:{
                        errorFirstName:false,
                        errorLastName:false,
                        errorPhone:false,
                    },
                    edit:false
                }
                state.filterContacts.unshift(contact)
                state.Contacts.unshift(contact)
                state.inputFirstName=''
                state.inputLastName=''
                state.inputPhone=''
                state.error=''
                for (let key in contact.errors){
                    contact.errors[key]=false
                }
            }
        },
        clear(state){
            state.filterContacts=[]
            state.Contacts=[]
        },
        deleteId(state,{payload}){
            console.log(payload.id)
            state.filterContacts.forEach((contact,i)=>{
                if(contact.id===payload.id){
                    state.filterContacts.splice(i,1)
                    state.Contacts.splice(i,1)
                }
            })
        },

    }
})
export const{changePhone,
    changeSearch,
    changeFirstName,
    changeLastName,
    addContact,
    clear,
    deleteId,
    changePhoneId,
    changeFirstNameId,
    changeLastNameId,
    openEditId,
    saveEditId,
}=contactsSlice.actions
export default contactsSlice.reducer