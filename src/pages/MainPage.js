import React, { useState } from "react";
import ToggleButton from "react-toggle-button";

import shake from "../Loop files/_tambourine_shake_higher.mp3";
import bvoc from "../Loop files/B VOC.mp3";
import alltrack from "../Loop files/ALL TRACK.mp3";
import drums from "../Loop files/DRUMS.mp3";
import hevoc from "../Loop files/HE HE VOC.mp3";
import highvoc from "../Loop files/HIGH VOC.mp3";
import jibrish from "../Loop files/JIBRISH.mp3";
import lead from "../Loop files/LEAD 1.mp3";
// import uuhovoc from "../Loop files/UUHO VOC.mp3";

import AudioPlayer from "../components/AudioPlayer";
import Button from "../components/Button";
import "./MainPage.css";

const MainPage = () => {
  const [isLooping, setIsLooping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playHandle = () => {
    console.log("Play");
    setIsPlaying(() => true);
  };
  const stopHandle = () => {
    console.log("Stop");
    setIsPlaying(() => false);
  };

  return (
    <div className="page">
      <div className="audio-players">
        <AudioPlayer src={shake} isPlaying={isPlaying} isLooping={isLooping} />
        <AudioPlayer src={bvoc} isPlaying={isPlaying} isLooping={isLooping} />
        <AudioPlayer
          src={alltrack}
          isPlaying={isPlaying}
          isLooping={isLooping}
        />
        <AudioPlayer src={drums} isPlaying={isPlaying} isLooping={isLooping} />
        <AudioPlayer src={hevoc} isPlaying={isPlaying} isLooping={isLooping} />
        <AudioPlayer
          src={highvoc}
          isPlaying={isPlaying}
          isLooping={isLooping}
        />
        <AudioPlayer
          src={jibrish}
          isPlaying={isPlaying}
          isLooping={isLooping}
        />
        <AudioPlayer src={lead} isPlaying={isPlaying} isLooping={isLooping} />
        {/* <AudioPlayer src={uuhovoc} /> */}
      </div>
      <div className="controls">
        <Button name="Play" onClick={playHandle} />
        <Button name="Stop" onClick={stopHandle} />
        <ToggleButton
          value={isLooping}
          onToggle={() => setIsLooping(!isLooping)}
        />
      </div>
    </div>
  );
};

export default MainPage;
