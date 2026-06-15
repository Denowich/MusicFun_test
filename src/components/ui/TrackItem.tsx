export const TrackItem = ({ track, isSelect, onSelect }) => {
  const handleClick = () => {
    onSelect();
  };
  return (
    <div>
      <li
        key={track.id}
        style={{
          border: isSelect,
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
