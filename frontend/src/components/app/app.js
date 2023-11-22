import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import PrivateRoute from "../routes/PrivateRoute"
import { AuthProvider, CSRFProvider, ModalProvider, MusicProvider } from "../../context";

import { HomePage, UserAudioPage} from "../pages";

import "./app.scss"


function App() {

  return (
    <CSRFProvider>
      <Router>
        <div className="app">
            <AuthProvider>
              <MusicProvider>
                <ModalProvider>
                  <Routes>

                    <Route path="/home" element={<HomePage/>}/>

                    <Route exact path="/users/:userId" element={<PrivateRoute component={<UserAudioPage/>}/>}/>

                    <Route path="*" element={ <Navigate to="/home" /> }/>
                      

                  </Routes>
                </ModalProvider>
              </MusicProvider>
            </AuthProvider>
        </div>
      </Router>
    </CSRFProvider>
  );
}

export default App;