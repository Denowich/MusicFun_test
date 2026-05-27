import { TrackDetail } from './TrackDetail';
import { TracksList } from './TracksList';

export function MainPage() {
      return (
            <div style={{ display: 'flex', gap: '40px' }}>
                  <TracksList />
                  <TrackDetail />
            </div>
      );
}
