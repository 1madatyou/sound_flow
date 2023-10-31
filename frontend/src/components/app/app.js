import { useState } from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Header from "../header/header"

import {HomePage} from "../pages";

import Footer from "../footer/footer"
import Modal from "../Modal/Modal"

import "./app.scss"


function App() {

  const [modalActive, setModalActive] = useState(false);
  const [currentModalForm, setCurrentModalForm] = useState();

  function switchModalActive(modalActive, modalFormType) {

    if (modalActive) {
      setModalActive(true)
      switchModalForm(modalFormType)
    } else {
      setModalActive(false)
    }
  }

  function switchModalForm(form) {
    setCurrentModalForm(() => null)
    setTimeout(() => {
      setCurrentModalForm(() => form)
    }, 1000)
  }

  return (
    <Router>
    
      <div className="app">
        <Header/>

        <main>
          <div className="wrapper">

          <Routes>

            <Route path='/' element={ <Navigate to="/home" /> }/>
            <Route path="/home" element={<HomePage switchModalActive={switchModalActive}/>}/>
            
          </Routes>

          </div>
        </main>

        <Footer/>
        <Modal 
          active={modalActive} 
          setActive={setModalActive}
          modalFormType={currentModalForm}
          setModalFormType={switchModalForm}/>
      </div>

    </Router>
  );
}

export default App;