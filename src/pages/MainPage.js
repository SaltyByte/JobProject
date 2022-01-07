import React, { useState } from "react";
import ToggleButton from "react-toggle-button";

import shake from "../Loop files/_tambourine_shake_higher.mp3";
import bvoc from "../Loop files/B VOC.mp3";
import drums from "../Loop files/DRUMS.mp3";
import hevoc from "../Loop files/HE HE VOC.mp3";
import highvoc from "../Loop files/HIGH VOC.mp3";
import jibrish from "../Loop files/JIBRISH.mp3";
import lead from "../Loop files/LEAD 1.mp3";
import uuhovoc from "../Loop files/UUHO VOC.mp3";
// import alltrack from "../Loop files/ALL TRACK.mp3";

import AudioPlayer from "../components/AudioPlayer";
import Button from "../components/Button";
import "./MainPage.css";

/*
  Main page component
*/
const MainPage = () => {
  const [isLooping, setIsLooping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // handles the play button
  const playHandle = async () => {
    console.log("Play");
    setIsPlaying(() => true);
  };
  // handles the stop button
  const stopHandle = () => {
    console.log("Stop");
    setIsPlaying(() => false);
  };

  // render all the 8 players.
  return (
    <div className="page">
      <div className="audio-players">
        <div className="cursor">
          {/*change the class of the line based on the playing state*/}
          <div className={isPlaying ? "line-loop" : "line"}>
            <div className="circle" />
          </div>
        </div>
        <AudioPlayer
          src={shake}
          isPlaying={isPlaying}
          isLooping={isLooping}
          setPlaying={setIsPlaying}
          backgroundColor={"#406882"}
          name="Tambourine Shake Higher"
        />
        <AudioPlayer
          src={bvoc}
          isPlaying={isPlaying}
          isLooping={isLooping}
          setPlaying={setIsPlaying}
          backgroundColor={"#3E8E7E"}
          name="B VOC"
        />
        <AudioPlayer
          src={uuhovoc}
          isPlaying={isPlaying}
          isLooping={isLooping}
          setPlaying={setIsPlaying}
          backgroundColor={"#FF5959"}
          name="UUHO VOC"
        />
        <AudioPlayer
          src={drums}
          isPlaying={isPlaying}
          isLooping={isLooping}
          setPlaying={setIsPlaying}
          backgroundColor={"#B958A5"}
          name="DRUMS"
        />
        <AudioPlayer
          src={hevoc}
          isPlaying={isPlaying}
          isLooping={isLooping}
          setPlaying={setIsPlaying}
          backgroundColor={"#F3C892"}
          name="HE HE VOC"
        />
        <AudioPlayer
          src={highvoc}
          isPlaying={isPlaying}
          isLooping={isLooping}
          setPlaying={setIsPlaying}
          backgroundColor={"#D3DEDC"}
          name="HIGH VOC"
        />
        <AudioPlayer
          src={jibrish}
          isPlaying={isPlaying}
          isLooping={isLooping}
          setPlaying={setIsPlaying}
          backgroundColor={"#B3541E"}
          name="JIBRISH"
        />
        <AudioPlayer
          src={lead}
          isPlaying={isPlaying}
          isLooping={isLooping}
          setPlaying={setIsPlaying}
          backgroundColor={"#146356"}
          name="LEAD 1"
        />
      </div>
      <div className="controls">
        <Button name="Play" onClick={playHandle} />
        <label className="loop-label">Loop</label>
        <ToggleButton
          value={isLooping}
          onToggle={() => setIsLooping(!isLooping)}
        />
        <Button name="Stop" onClick={stopHandle} />
      </div>
    </div>
  );
};

export default MainPage;
