import React from 'react';

export function Video() {
    return (
      <video width="650" height="400" controls preload="none">
        <source src="https://ik.imagekit.io/ikmedia/example_video.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    )
  }