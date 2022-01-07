import React, { useState, useEffect } from "react";
import ToggleButton from "react-toggle-button";

import "./AudioPlayer.css";

const AudioPlayer = (props) => {
  const [audio] = useState(new Audio(props.src));
  const [isMuted, setIsMuted] = useState(false);

  const handleMute = () => {
    console.log("Mute");
    setIsMuted(!isMuted);
  };

  const { isPlaying, isLooping, setPlaying, name } = props;

  useEffect(() => {
    audio.addEventListener("ended", () => {
      audio.currentTime = 0;
      console.log("ended");
      setPlaying(false);
    });
    return () => {
      audio.removeEventListener("ended", () => {
        audio.currentTime = 0;
        console.log("ended");
        setPlaying(false);
      });
    };
  }, []);

  useEffect(() => {
    console.log("is playing: ", isPlaying);
    console.log("is looping: ", isLooping);
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
    } else if ((isPlaying && !isMuted) || (audio.ended && !isMuted)) {
      audio.play();
    }
  }, [isPlaying, isLooping, audio, isMuted]);

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
