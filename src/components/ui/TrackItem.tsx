export const TrackItem = (props) => {
  return (
    <div>
      <li
        key={props.track.id}
        style={{
          border:
            props.selectedTrackId === props.track.id
              ? '3px solid green'
              : '3px solid white',
        }}
      >
        <div onClick={props.handleClick}>{props.track.attributes.title}</div>
        <div>
          <audio
            controls
            src={props.track.attributes.attachments[0].url}
          ></audio>
        </div>
      </li>
    </div>
  );
};
