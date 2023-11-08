import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "../routes/PrivateRoute"
import { AuthProvider } from "../../context/AuthContext";
import { ModalProvider } from "../../context/ModalContext"

import { HomePage, UserAudioPage} from "../pages";

import "./app.scss"


function App() {
  return (
    <Router>
      <div className="app">
        <AuthProvider>
          <ModalProvider>
            <Routes>

              <Route path='/' element={ <Navigate to="/home" /> }/>
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/utt" element={<UserAudioPage/>}/>
              <Route path="/big" element={<PrivateRoute> <div>Big Dick!</div> </PrivateRoute>}/>

            </Routes>
          </ModalProvider>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;