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
    if (!props.isPlaying) {
      audio.pause();
    } else if (props.isPlaying && !isMuted) {
      audio.play();
    }
  }, [props.isPlaying, audio, isMuted]);

  return (
    <div className="audio-block">
      <div className="audio">
        {/* <audio
          loop={props.isLooping}
          muted={isMuted}
          autoPlay={props.isPlaying}
        >
          <source src={props.src} type="audio/mp3"></source>
          Your browser does not support the audio element.
        </audio> */}
      </div>
      <div className="checkbox">
        <ToggleButton value={isMuted} onToggle={handleMute} />
      </div>
    </div>
  );
};

export default AudioPlayer;
