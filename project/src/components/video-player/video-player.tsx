import { useEffect, useRef } from 'react';
import { PREVIEW_VIDEO_PLAY_TIMEOUT } from '../../const';

type VideoPlayerProps = {
  previewVideoLink: string,
  posterImage: string,
}

function VideoPlayer({previewVideoLink, posterImage}: VideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const playVideoTimeout = setTimeout(() =>
      videoRef.current && videoRef.current.play(),
    PREVIEW_VIDEO_PLAY_TIMEOUT);

    return () => clearTimeout(playVideoTimeout);
  }, [previewVideoLink]);

  return (
    <video
      src={previewVideoLink}
      className="player__video"
      poster={posterImage}
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
