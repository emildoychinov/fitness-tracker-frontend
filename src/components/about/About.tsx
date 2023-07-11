import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import './About.css';
import Videolist from '../Video-List/Videolist';

class About extends React.Component<RouteComponentProps<About>, {}> {
  constructor(props: RouteComponentProps<About>) {
    super(props);
  }
  

  render() {
    return (
      <>
        <div className="workout-content">
          <img src="/assets/imgs/gym.jpg" alt="gym.jpg" className="image-background" />
          <h2>Recommended <span>Workouts</span></h2>
        </div>

        <Videolist videos={[
          {id: 1},
          {id: 2}
        ]} emptyHeading="No Videos" />

        <button onClick={(e: any) => this.props.history.goBack()}>
          Go Back
        </button>
      </>
    );
  }
}

export default About;