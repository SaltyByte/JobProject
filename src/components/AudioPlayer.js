import React, { useState, useEffect } from "react";
import ToggleButton from "react-toggle-button";

import "./AudioPlayer.css";
import "./Button";

const AudioPlayer = (props) => {
  const [audio] = useState(new Audio(props.src));
  const [isMuted, setIsMuted] = useState(false);

  const handleMute = () => {
    console.log("Mute");
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    console.log("Inside useEffect");
    if (props.isLooping) {
      audio.loop = true;
    } else if (!props.isLooping) {
      audio.loop = false;
    }
    if (isMuted) {
      audio.muted = true;
    } else if (!isMuted) {
      audio.muted = false;
    }
    if (!props.isPlaying) {
      audio.pause();
    } else if ((props.isPlaying && !isMuted) || audio.ended) {
      audio.play();
    }
  }, [props.isPlaying, props.isLooping, audio, isMuted]);

  return (
    <div className="audio-block">
      <div className="checkbox">
        <ToggleButton value={isMuted} onToggle={handleMute} />
      </div>
    </div>
  );
};

export default AudioPlayer;
