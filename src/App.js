import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/footer/footer";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <div className="App absolute font-sans h-screen w-screen scrollbar-hide overflow-x-hidden  mx-auto  ">
      <Header/>
        <div className={' mx-10 lg:mx-20  '}>
            <Routes>
                <Route path={'/'} element={<Dashboard/>}/>
            </Routes>
        </div>
    <Footer/>
    </div>
  );
}

export default App;
