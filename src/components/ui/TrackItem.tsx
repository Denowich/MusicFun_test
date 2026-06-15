export const TrackItem = ({ track, selectedTrackId, onSelect }) => {
  const handleClick = () => {
    onSelect();
  };
  return (
    <div>
      <li
        key={track.id}
        style={{
          border:
            selectedTrackId === track.id
              ? '3px solid green'
              : '3px solid white',
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
