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

  const { isPlaying, isLooping } = props;

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
      console.log("loading");
      audio.load();
    } else if ((isPlaying && !isMuted) || (audio.ended && !isMuted)) {
      console.log("playing");
      audio.play();
    }
  }, [isPlaying, isLooping, audio, isMuted]);

  return (
    <div className="audio-block">
      <div className="checkbox">
        <ToggleButton value={isMuted} onToggle={handleMute} />
      </div>
    </div>
  );
};

export default AudioPlayer;
