import { useContext, useState } from "react";
import MusicContext from "../../../context/MusicContext";

import "./volume-range-slider.scss"


const VolumeRangeSlider = () => {
  const {volume, setVolume, isMuted} = useContext(MusicContext)


  const onChange = (e) => {
    setVolume(e.target.valueAsNumber)
  }

  return (
    <div className="volume-range-slider">
      <input
        type="range"
        min={0}
        max={1}
        step={0.05}
        value={isMuted ? 0 : volume}
        onChange={onChange}
      />
    </div>
    
  )
}

export default VolumeRangeSlider