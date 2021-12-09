import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/footer/footer";
import Dashboard from "./components/dashboard/dashboard";
import Auth from "./components/auth/auth";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {authActions} from "../src/state"
import {useEffect} from "react";


function App() {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const {ON_AUTH_STATE_CHANGE} = bindActionCreators(authActions, dispatch)

    useEffect(() => {
        ON_AUTH_STATE_CHANGE()
    }, []);


    return (
    <div className="App absolute font-sans h-screen w-screen scrollbar-hide overflow-x-hidden  mx-auto  ">
      <Header/>
        <div className={' mx-10 lg:mx-20  '}>
            <Routes>
                <Route path={'/'} element={<Dashboard/>}/>
                <Route path={'/auth'} element={<Auth/>}/>
            </Routes>
        </div>
    <Footer/>
    </div>
  );
}

export default App;
