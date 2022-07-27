import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  video: string,
  poster: string
}

function VideoPlayer({video, poster}: VideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const playVideoTimeout = setTimeout(() =>
      videoRef.current && videoRef.current.play(),
    1000);

    return () => clearTimeout(playVideoTimeout);
  });

  return (
    <video
      src={video}
      className="player__video"
      poster={poster}
      ref={videoRef}
      muted
      loop
      width='280'
      height='175'
    >
    </video>
  );
}

export default VideoPlayer;
