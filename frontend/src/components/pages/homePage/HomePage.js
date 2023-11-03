import { useContext } from "react"
import ModalContext from "../../../context/ModalContext"

import soda_luv from "../../../resources/img/home/soda_luv.png"
import buda from "../../../resources/img/home/buda.jpeg"



import "./homePage.scss"

const HomePage = ({}) => {

  const {switchModalActive} = useContext(ModalContext)

  return (
      <>

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
                <img src={soda_luv} alt="Artist" className="music-block-content-img music-block-content-img--sodaluv"/>
                <span className="text text--align-right"> Discover<br/>more </span>
              </div>

              <div className="music-block-column">
                <span className="text text--align-left">
                  Follow your<br/>favourite<br/>artists
                </span>
                <img src={buda} alt="Artist" className="music-block-content-img music-block-content-img--buda"/>
              </div>

            </div>

          </div>
      </section>

      <section className="streams-block">
      <div className="streams-block__wrapper">
          <div className="streams-block__content">

          <button className="large-btn">
              Upload
              <svg className="large-btn-cursor" width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
              <path d="M82.1 117.9C82.5 117.9 82.9 117.8 83.3 117.7C84.8 117.1 85.6 115.3 84.9 113.8L75.6 91.5H96C98 91.5 99.9 90.3 100.6 88.4C101.4 86.5 100.9 84.4 99.4 82.9L56.5 41.1C55.1 39.7 52.9 39.3 51.1 40.1C49.2 40.9 48.1 42.7 48.1 44.7V104.9C48.1 107 49.3 108.8 51.3 109.6C51.9 109.8 52.5 110 53.1 110C54.5 110 55.8 109.4 56.7 108.4L70.2 94L79.4 116.2C79.9 117.2 81 117.9 82.1 117.9ZM40.6 22.7C41.1 23.9 42.2 24.5 43.4 24.5C43.8 24.5 44.2 24.4 44.6 24.3C46.1 23.7 46.9 21.9 46.2 20.4L40.3 6.49999C39.7 4.99999 37.9 4.19999 36.4 4.89999C34.9 5.49999 34.1 7.29999 34.8 8.79999L40.6 22.7ZM16.7 32.4L31 36.9C31.3 37 31.6 37 31.9 37C33.2 37 34.4 36.2 34.8 34.9C35.3 33.3 34.4 31.6 32.8 31.1L18.5 26.6C16.9 26.1 15.2 27 14.7 28.6C14.2 30.2 15.1 31.9 16.7 32.4ZM58.9 24.9C59.3 25.1 59.8 25.2 60.3 25.2C61.4 25.2 62.4 24.6 63 23.6L70 10.3C70.8 8.79999 70.2 6.99999 68.7 6.29999C67.2 5.49999 65.4 6.09999 64.7 7.59999L57.7 20.9C56.9 22.4 57.4 24.2 58.9 24.9Z"/>
              </svg>

          </button>

          <span className="large-text large-text--green"> , get streams.</span>
          </div>
      </div>
      </section>

      <section className="join-block">
      <div className="join-block__wrapper">

          <div className="join-block__content">
          <span className="text">
              Join us.
          </span>
          <span className="sub-text">
              Upload tracks, follow artists, create playlists. For free.
          </span>
          <button className="btn join-block-btn " onClick={() => switchModalActive(true, "AuthForm")}>
              Create account
          </button>
          </div>

      </div>
      </section>

  </>
  )
}

export default HomePage;