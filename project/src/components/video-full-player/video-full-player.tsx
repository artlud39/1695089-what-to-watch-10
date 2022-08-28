import { MutableRefObject, useState } from 'react';
import Spinner from '../spinner/spinner';

type VideoFullPlayerProps = {
  src: string,
  poster: string,
  videoRef?: MutableRefObject<HTMLVideoElement | null>,
  onLoadedMetadata?: () => void,
  onTimeUpdate?: () => void,
  onEndPlay?: () => void,
}

function VideoFullPlayer(props: VideoFullPlayerProps): JSX.Element {
  const {videoRef, src, poster, onLoadedMetadata, onTimeUpdate, onEndPlay} = props;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEndPlay}
        onSeeking={() => setIsLoading(true)}
        onSeeked={() => setIsLoading(false)}
        className="player__video"
        data-testid="player-video"
      />
      {
        isLoading &&
        <span className="player-preloader">
          <Spinner/>
        </span>
      }
    </>
  );
}

export default VideoFullPlayer;
