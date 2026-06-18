import { useEffect, useState } from 'react';
import { TrackItem, type GetTracksListOutputData } from './TrackItem';

type Props = {
  selectedTrackId: string | null;
  onTrackSelect: (id: string | null) => void;
};

export const TracksList = ({ selectedTrackId, onTrackSelect }: Props) => {
  const [tracks, setTracks] = useState<GetTracksListOutputData[] | null>(null);

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
  const handleClickSelect = (trackId: string) => {
    onTrackSelect?.(trackId);
  };

  return (
    <div>
      <h1>MusicFun</h1>
      <button onClick={handleClickReset}>Reset selection</button>

      <div>
        <ul>
          <ol>
            {tracks.map((track) => {
              return (
                <TrackItem
                  track={track}
                  isSelect={selectedTrackId === track.id}
                  onSelect={handleClickSelect}
                />
              );
            })}
          </ol>
        </ul>
      </div>
    </div>
  );
};
