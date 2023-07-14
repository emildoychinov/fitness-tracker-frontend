import * as React from "react";
import { RouteComponentProps } from "react-router";
import "./About.css";

class About extends React.Component<RouteComponentProps<About>, {}> {
  constructor(props: RouteComponentProps<About>) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="workout-content">
          <img
            src="/assets/imgs/gym.jpg"
            alt="gym.jpg"
            className="image-background"
          />
          <h2>
            RECOMMENDED <span>WORKOUTS</span>
          </h2>
        </div>

        <div className="workout-content-btn">
          <button onClick={(_e: any) => this.props.history.goBack()}>
            Go Back
          </button>
        </div>
      </>
    );
  }
}

export default About;
