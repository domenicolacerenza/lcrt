// components/AudioPlayer.js

import React from 'react';

const AudioLoop = () => {
  return (
    <audio loop autoPlay  style={{ display: 'none' }}>
      <source src="/audio/UL.flac" type="audio/flac" />
      <source src="/audio/UL.opus" type="audio/ogg; codecs=opus" />
      <source src="/audio/UL.m4a" type="audio/mp4; codecs=mp4a.40.1" />
      <source src="/audio/UL.ogg" type="audio/ogg" />
      <source src="/audio/UL.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default AudioLoop;
