import './App.css';
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {authYes} from "./store/UserAction";

function App() {
    const auth=useSelector(state=>state.user.auth)
    const dispatch=useDispatch()
    useEffect(()=>{
        setInterval(()=>{
            if(localStorage.getItem('token')){
                dispatch(authYes())
            }
        },300)
    },[])
  return (
    <>
      <Header/>
        <Routes>
            <Route exact path='/' element={auth?<Navigate to='/contacts'/>: <MainPage/>}/>
            <Route exact path='/contacts' element={auth? <ContactsPage/>:<Navigate to='/'/>}/>
        </Routes>
    </>
  );
}

export default App;
