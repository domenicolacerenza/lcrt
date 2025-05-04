"use client";  // Aggiungi questa riga in cima

import React, { useState, useRef } from "react";

const AudioLoop = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div>
      <audio ref={audioRef} loop autoPlay style={{ display: 'none' }}>
        <source src="/audio/UL.flac" type="audio/flac" />
        <source src="/audio/UL.opus" type="audio/ogg; codecs=opus" />
        <source src="/audio/UL.m4a" type="audio/mp4; codecs=mp4a.40.1" />
        <source src="/audio/UL.ogg" type="audio/ogg" />
        <source src="/audio/UL.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMute}
        className="fixed md:bottom-6 bottom-3 md:left-6 left-4 
        flex items-center justify-center 
        md:w-12 md:h-12 w-10 h-10 rounded-full 
        buttonstyle "
      >
        <span className="md:text-4xl text-2xl leading-none"> {isMuted ? "■" : "▶︎"} </span>

      </button>
    </div>
  );
};

export default AudioLoop;
