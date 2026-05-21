// import { useMainPage } from '../bll/useMainPage';
// import { useState } from 'react';
import { TrackDetail } from './TrackDetail';
import { TracksList } from './TracksList';
// import style from './TracksList.module.css';

export function MainPage() {
      // const { trackId, setTrackId } = useMainPage();

      // const handleClickSelect = (id: string | null): void => {
      // setTrackId(id);
      // };

      return (
            <div style={{ display: 'flex', gap: '40px' }}>
                  <TracksList
                  // selectedTrackId={(id) => {
                  // setTrackId(id);
                  // }}
                  // onTrackSelect={trackId}
                  />
                  <TrackDetail />
            </div>
      );
}
