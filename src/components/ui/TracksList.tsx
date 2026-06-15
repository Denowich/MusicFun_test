import { useEffect, useState } from 'react';
import { TrackItem } from './TrackItem';

export const TracksList = ({ selectedTrackId, onTrackSelect }) => {
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    fetch(
      'https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5',
      {
        headers: {
          'api-key': '00b55d65-518b-49dd-b73e-845e02e9861b',
        },
      },
    )
      .then((res) => res.json())
      .then((json) => setTracks(json.data));
  }, []);

  if (tracks === null) {
    return (
      <div>
        <h1>MusicFun</h1>
        <span>Loading...</span>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div>
        <h1>MusicFun</h1>
        <span>No tracks</span>
      </div>
    );
  }

  const handleClickReset = () => {
    onTrackSelect?.(null);
  };

  return (
    <div>
      <h1>MusicFun</h1>
      <button onClick={handleClickReset}>Reset selection</button>

      <div>
        <ul>
          <ol>
            {tracks.map((track) => {
              const handleClick = () => {
                onTrackSelect?.(track.id);
              };
              return (
                <TrackItem
                  track={track}
                  isSelect={
                    selectedTrackId === track.id
                      ? '3px solid green'
                      : '3px solid white'
                  }
                  onSelect={handleClick}
                />
              );
            })}
          </ol>
        </ul>
      </div>
    </div>
  );
};
