// components/AudioPlayer.js

import React from 'react';

const AudioLoop = () => {
  return (
    <audio loop autoPlay  style={{ display: 'none' }}>
      <source src="/audio/micro.flac" type="audio/flac" />
      <source src="/audio/micro.opus" type="audio/ogg; codecs=opus" />
      <source src="/audio/micro.m4a" type="audio/mp4; codecs=mp4a.40.1" />
      <source src="/audio/micro.ogg" type="audio/ogg" />
      <source src="/audio/micro.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default AudioLoop;
