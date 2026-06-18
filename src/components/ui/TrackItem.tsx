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

type Props = {
  track: GetTracksListOutputData;
  isSelect: boolean;
  onSelect: (trackId: string) => void;
};

export const TrackItem = ({ track, isSelect, onSelect }: Props) => {
  const handleClick = () => {
    onSelect(track.id);
  };
  return (
    <div>
      <li
        key={track.id}
        style={{
          border: isSelect ? '3px solid green' : '3px solid white',
          marginBottom: '20px',
          padding: '10px',
          borderRadius: '15px',
        }}
      >
        <div onClick={handleClick}>{track.attributes.title}</div>
        <div>
          <audio controls src={track.attributes.attachments[0].url}></audio>
        </div>
      </li>
    </div>
  );
};
