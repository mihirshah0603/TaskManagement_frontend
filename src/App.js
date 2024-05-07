import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import TaskList from './components/TaskList'

function App(){
  return(
    <>
      <Router>
        <div className = 'container'>
          <Header></Header>
          <Routes>
            <Route path = '/' element={<Dashboard></Dashboard>}></Route>
            <Route path = '/login' element={<Login></Login>}></Route>
            <Route path = '/register' element={<Register></Register>}></Route>
            <Route path = '/alltasks' element={<TaskList></TaskList>}></Route>
          </Routes>
        </div>
      </Router> 
      <ToastContainer></ToastContainer>   
    </>
  )
}

export default App;