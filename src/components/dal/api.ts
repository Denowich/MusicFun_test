type Attachments = {
  url: string;
};

type TracksListAttributes = {
  title: string;
  attachments: Attachments[];
};

export type GetTracksListOutputData = {
  id: string;
  attributes: TracksListAttributes;
};

// ============================================================================

export const getTracks = () => {
  const promise: Promise<{ data: GetTracksListOutputData[] }> = fetch(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5',
    {
      headers: {
        'api-key': '00b55d65-518b-49dd-b73e-845e02e9861b',
      },
    },
  ).then((res) => res.json());
  return promise;
};

//=============================================================================

type TrackDetailAttributes = {
  title: string;
  lyrics: string | null;
};

export type GetTrackDetailOutput = {
  id: string;
  attributes: TrackDetailAttributes;
};

export const getTrack = (trackId: string | null) => {
  const promise: Promise<{ data: GetTrackDetailOutput }> = fetch(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId,
    {
      headers: {
        'api-key': '00b55d65-518b-49dd-b73e-845e02e9861b-',
      },
    },
  ).then((res) => res.json());
  return promise;
};
