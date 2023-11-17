import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import PrivateRoute from "../routes/PrivateRoute"
import { AuthProvider, CSRFProvider, ModalProvider } from "../../context";

import { HomePage, UserAudioPage} from "../pages";

import "./app.scss"


function App() {

  return (
      <Router>
        <div className="app">
            <AuthProvider>
              <ModalProvider>
                <Routes>

                  <Route path="/home" element={<HomePage/>}/>

                  <Route exact path="/users/:userId" element={<PrivateRoute component={<UserAudioPage/>}/>}/>

                  <Route path="*" element={ <Navigate to="/home" /> }/>
                    

                </Routes>
              </ModalProvider>
            </AuthProvider>
        </div>
      </Router>
  );
}

export default App;