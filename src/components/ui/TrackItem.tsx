// import type { GetTracksListOutputData } from './TracksList';

// type Props = {
//       onTrackSelect: (id: string | null) => void;
//       track: GetTracksListOutputData;
//       // isSelected: boolean;
//       selectedTrackId: (id: string | null) => void;
// };

export const TrackItem = (props) => {
      // const handleClick = () => {
      // props.onTrackSelect?.(props.track.id);
      // };

      return (
            <div>
                  <li
                        key={props.track.id}
                        style={{
                              border:
                                    props.selectedTrackId === props.track.id
                                          ? '3px solid green'
                                          : 'none',
                        }}
                  >
                        <div onClick={props.handleClick}>
                              {props.track.attributes.title}
                        </div>
                        <div>
                              <audio
                                    controls
                                    src={
                                          props.track.attributes.attachments[0]
                                                .url
                                    }
                              ></audio>
                        </div>
                  </li>
            </div>
      );
};
