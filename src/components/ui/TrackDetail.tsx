import { useEffect, useState } from 'react';

export const TrackDetail = (props) => {
      const [trackDetail, setTrackDetail] = useState(null);
      const selectedTrackId = props.trackId;

      useEffect(() => {
            fetch(
                  'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' +
                        selectedTrackId,
                  {
                        headers: {
                              'api-key': '00b55d65-518b-49dd-b73e-845e02e9861b',
                        },
                  },
            )
                  .then((res) => res.json())
                  .then((json) => setTrackDetail(json.data));
      }, [selectedTrackId]);

      return (
            <div>
                  <div>
                        <h2>Detail</h2>

                        {!selectedTrackId &&
                              !trackDetail &&
                              'Track is not selected'}
                        {selectedTrackId && !trackDetail && 'Loading...'}
                        {selectedTrackId &&
                              trackDetail &&
                              trackDetail.id !== selectedTrackId &&
                              'Loading track info'}

                        {trackDetail && (
                              <div>
                                    {trackDetail.attributes.title}

                                    <h3>Lyrics:</h3>
                                    {trackDetail.attributes.lyrics ??
                                          'no lyrics'}
                              </div>
                        )}
                  </div>
            </div>
      );
};
