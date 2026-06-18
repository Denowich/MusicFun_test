import { useState } from 'react';
import { TrackDetail } from './TrackDetail';
import { TracksList } from './TracksList';

export function MainPage() {
  const [trackId, setTrackId] = useState<string | null>(null);

  const handleClick = (id: string | null): void => {
    setTrackId(id);
  };

  return (
    <div style={{ display: 'flex', gap: '40px' }}>
      <TracksList selectedTrackId={trackId} onTrackSelect={handleClick} />
      <TrackDetail trackId={trackId} />
    </div>
  );
}
