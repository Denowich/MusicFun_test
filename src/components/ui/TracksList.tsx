import { useEffect, useState } from 'react';
// import { TrackItem } from './TrackItem';

export const TracksList = () => {
      const [selectedTrackId, setSelectedTrackId] = useState(null);
      const [tracks, setTracks] = useState(null);

      useEffect(() => {
            fetch(
                  'https://musicfun.it-incubator.app/api/1.0/playlists/tracks',
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
                        <span>Loading</span>
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
            setSelectedTrackId?.(null);
      };

      // const handleClick = (trackId: string) => {
      //       selectedTrackId?.(trackId);
      // };

      return (
            <div>
                  <h1>MusicFun</h1>
                  <button onClick={handleClickReset}>Reset</button>

                  <div>
                        <ul>
                              <ol>
                                    {tracks.map((track) => {
                                          // const handleClick = () => {
                                          //       setSelectedTrackId(track.id);
                                          // };
                                          return (
                                                <li
                                                      key={track.id}
                                                      style={{
                                                            border:
                                                                  selectedTrackId ===
                                                                  track.id
                                                                        ? '3px solid green'
                                                                        : 'none',
                                                      }}
                                                >
                                                      <div
                                                            onClick={() => {
                                                                  setSelectedTrackId(
                                                                        track.id,
                                                                  );
                                                            }}
                                                      >
                                                            {
                                                                  track
                                                                        .attributes
                                                                        .title
                                                            }
                                                      </div>
                                                      <div>
                                                            <audio
                                                                  controls
                                                                  src={
                                                                        track
                                                                              .attributes
                                                                              .attachments[0]
                                                                              .url
                                                                  }
                                                            ></audio>
                                                      </div>
                                                </li>
                                                // <TrackItem
                                                //       key={track.id}
                                                //       track={track}
                                                //       selectedTrackId={
                                                //             selectedTrackId
                                                //       }
                                                //       handleClick={handleClick}
                                                //       onTrackSelect={
                                                //             onTrackSelect
                                                //       }
                                                // />
                                          );
                                    })}
                              </ol>
                        </ul>
                  </div>
            </div>
      );
};
