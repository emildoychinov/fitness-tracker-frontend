import * as React from 'react';
import './Videolist.css';

  interface Videolist {
    id: number;
  }

  interface Props {
    videos: Videolist[];
    emptyHeading: string;
  }
  
  const Videolist: React.FC<Props> = ({ videos, emptyHeading }): JSX.Element => {
    const count = videos.length;
    let heading = emptyHeading;
    if (count > 0) {
      const noun = count === 1 ? 'Video' : 'Videos';
      heading = count + ' ' + noun;
    }
    return (
      <section>
        <h2>{heading}</h2>
        {videos.map(video => (
          <Video key={video.id} video={video} />
        ))}
      </section>
    );
  };
  
  interface VideoProps {
    video: Videolist;
  }
  
  const Video: React.FC<VideoProps> = ({ video }): JSX.Element => {
    // Render the video component
    return <div>{video.id}</div>;
  };

  export default Videolist;