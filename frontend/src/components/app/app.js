import Header from "../header/header"
import Footer from "../footer/footer"
import Form from "../form/form"

import soda_luv from "../../resources/img/home/soda_luv.png"
import buda from "../../resources/img/home/buda.jpeg"


import "./app.scss"

function App() {
  return (
    <div className="app">
      <Header/>

      <main>
        <div className="wrapper">

          <section className="music-block">
            <div className="music-block__wrapper">

              <div className="music-block__content">
                
                <div className="music-block-column">
                    <span className="large-text">
                      Live<br/>with<br/>
                      <span className="large-text large-text--green">
                        music.
                      </span>
                    </span>
                    <br/>
                    
                </div>
                
                <div className="music-block-column">
                  <img src={soda_luv} alt="Artist image" className="music-block-content-img music-block-content-img--sodaluv"/>
                  <span className="text text--align-right"> Discover<br/>more </span>
                </div>

                <div className="music-block-column">
                  <span className="text text--align-left">
                    Follow your<br/>favourite<br/>artists
                  </span>
                  <img src={buda} alt="Artist image" className="music-block-content-img music-block-content-img--buda"/>
                </div>

              </div>

            </div>
          </section>

          <section className="streams-block">
            <div className="streams-block__wrapper">
              <div className="streams-block__content">
                <button className="large-btn">Upload</button>
                <span className="large-text large-text--green"> , get streams.</span>
              </div>
            </div>
          </section>

          <section className="join-block">
            <div className="join-block__wrapper">

              <div className="join-block__content">
                <span className="text ">
                  Join us.
                </span>
                <span className="sub-text">
                  Upload tracks, follow artists, create playlists. For free.
                </span>
                <button className="btn join-block-btn ">
                  Create account
                </button>
              </div>

            </div>
          </section>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default App;