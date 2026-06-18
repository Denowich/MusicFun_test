import { useEffect, useState } from 'react';

export const TrackDetail = ({ trackId }) => {
  const [trackDetail, setTrackDetail] = useState(null);

  useEffect(() => {
    fetch(
      'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId,
      {
        headers: {
          'api-key': '00b55d65-518b-49dd-b73e-845e02e9861b-',
        },
      },
    )
      .then((res) => res.json())
      .then((json) => setTrackDetail(json.data));
  }, [trackId]);

  return (
    <div>
      <div>
        <h2>Detail</h2>

        {!trackId && !trackDetail && 'Track is not selected'}
        {trackId && !trackDetail && 'Loading...'}
        {trackId &&
          trackDetail &&
          trackDetail.id !== trackId &&
          'Loading track info'}

        {trackDetail && (
          <div>
            {trackDetail.attributes.title}

            <h3>Lyrics:</h3>
            {trackDetail.attributes.lyrics ?? 'no lyrics'}
          </div>
        )}
      </div>
    </div>
  );
};
