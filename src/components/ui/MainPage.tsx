import { useState } from 'react';
import { TrackDetail } from './TrackDetail';
import { TracksList } from './TracksList';

export function MainPage() {
  const [trackId, setTrackId] = useState(null);

  return (
    <div style={{ display: 'flex', gap: '40px' }}>
      <TracksList
        selectedTrackId={trackId}
        onTrackSelect={(id) => {
          setTrackId(id);
        }}
      />
      <TrackDetail trackId={trackId} />
    </div>
  );
}
