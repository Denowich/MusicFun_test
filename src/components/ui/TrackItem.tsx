export const TrackItem = ({ track, isSelect, onSelect }) => {
  const handleClick = () => {
    onSelect(track.id);
  };
  return (
    <div>
      <li
        key={track.id}
        style={{
          border: isSelect,
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
