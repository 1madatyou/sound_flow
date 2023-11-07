import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import PrivateRoute from "../../utils/PrivateRoute";
import { AuthProvider } from "../../context/AuthContext";
import { ModalProvider } from "../../context/ModalContext"

import Header from "../header/header"
import { HomePage, UserTracksPage } from "../pages";
import Footer from "../footer/footer"

import "./app.scss"


function App() {
  

  return (
    <Router>
      <div className="app">
        <AuthProvider>
          <ModalProvider>
            <Header/>

            <main>
              <div className="wrapper">

              <Routes>

                <Route path='/' element={ <Navigate to="/home" /> }/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/utt" element={<UserTracksPage/>}/>
                <Route path="/big" element={<PrivateRoute> <div>Big Dick!</div> </PrivateRoute>}/>

              </Routes>

              </div>
            </main>

            <Footer/>
          </ModalProvider>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;