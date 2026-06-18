type Attachments = {
  url: string;
};

type TracksListAttributes = {
  title: string;
  attachments: Attachments[];
};

export type GetTracksListOutput = {
  id: string;
  attributes: TracksListAttributes;
};

type GetTracksListOutputData = {
  data: GetTracksListOutput[];
};

// ============================================================================

export const getTracks = () => {
  const promise: Promise<GetTracksListOutputData> = fetch(
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

type GetTrackDetailOutputData = {
  data: GetTrackDetailOutput;
};

//=============================================================================

export const getTrack = (trackId: string | null) => {
  const promise: Promise<GetTrackDetailOutputData> = fetch(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId,
    {
      headers: {
        'api-key': '00b55d65-518b-49dd-b73e-845e02e9861b-',
      },
    },
  ).then((res) => res.json());
  return promise;
};
