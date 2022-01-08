import React, { useState, useEffect } from "react";
import ToggleButton from "react-toggle-button";

import "./AudioPlayer.css";

/*
  Audio player component
  Each player takes the props:
  src - The mp3 audio file source
  isPlaying - Does the player should be playing
  isLooping - Does the player should be looping
  setPlaying - set the state of the playing prop
  name - The file name, what will be displayed
  backgroundColor - Color of row
*/
const AudioPlayer = (props) => {
  // states of the component
  const [audio] = useState(new Audio(props.src));
  const [isMuted, setIsMuted] = useState(false);

  // handles mute
  const handleMute = () => {
    console.log("Mute");
    setIsMuted(!isMuted);
  };

  const { isPlaying, isLooping, setPlaying, name } = props;

  // adds listener for the ended boolean. when the audio ends, set the isPlaying state to false
  // when the component unmounts, we leave the listener
  useEffect(() => {
    audio.addEventListener("ended", () => {
      audio.currentTime = 0;
      setPlaying(false);
    });
    return () => {
      audio.removeEventListener("ended", () => {
        audio.currentTime = 0;
        setPlaying(false);
      });
    };
  }, []);

  // the main logic of the audio player. each time the state changes, we check what to update
  useEffect(() => {
    if (isLooping) {
      audio.loop = true;
    } else if (!isLooping) {
      audio.loop = false;
    }
    if (isMuted) {
      audio.muted = true;
    } else if (!isMuted) {
      audio.muted = false;
    }
    if (!isPlaying) {
      audio.load();
    } else if (isPlaying || audio.ended) {
      audio.play();
    }
  }, [isPlaying, isLooping, audio, isMuted]); // list of dependencies we watch

  return (
    <React.Fragment>
      <div
        className="audio-block"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <label className="name">{name}</label>
        <div className="checkbox">
          <label className="label">Mute</label>
          <ToggleButton value={isMuted} onToggle={handleMute} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AudioPlayer;
