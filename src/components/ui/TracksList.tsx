import { useEffect, useState } from 'react';

export const TracksList = (props) => {
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
        <span>Loading</span>
      </div>
    );
  }

  // if (tracks.length === 0) {
  //       return (
  //             <div>
  //                   <h1>MusicFun</h1>
  //                   <span>No tracks</span>
  //             </div>
  //       );
  // }

  const handleClickReset = () => {
    props.onTrackSelect?.(null);
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
                props.onTrackSelect?.(track.id);
              };
              return (
                <li
                  key={track.id}
                  style={{
                    border:
                      props.selectedTrackId === track.id
                        ? '3px solid green'
                        : '3px solid white',
                  }}
                >
                  <div onClick={handleClick}>{track.attributes.title}</div>
                  <div>
                    <audio
                      controls
                      src={track.attributes.attachments[0].url}
                    ></audio>
                  </div>
                </li>
              );
            })}
          </ol>
        </ul>
      </div>
    </div>
  );
};
