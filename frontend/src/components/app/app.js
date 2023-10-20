import Header from "../header/header"
import Footer from "../footer/footer"
import Form from "../form/form"


import "./app.scss"

function App() {
  return (
    <div className="app">
      <Header/>

      <main>
        <div className="wrapper">
          <Form header="Sign in to SoundFlow"/>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default App;