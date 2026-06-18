import { useEffect, useState } from 'react';
import { getTrack, type GetTrackDetailOutput } from '../dal/api';

type Props = {
  trackId: string | null;
};

export const TrackDetail = ({ trackId }: Props) => {
  const [trackDetail, setTrackDetail] = useState<GetTrackDetailOutput | null>(
    null,
  );

  useEffect(() => {
    getTrack(trackId).then((json) => setTrackDetail(json.data));
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
