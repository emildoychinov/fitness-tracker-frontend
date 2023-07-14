import * as React from "react";
import { RouteComponentProps } from "react-router";
import "./About.css";
import SaveButton from "../SaveButton/SaveButton";
import { useEffect, useRef, useState } from "react";

interface AboutProps extends RouteComponentProps<typeof About> {}

const About: React.FC<AboutProps> = ({ history }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSave = () => {
    console.log("Save button clicked!");
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const handleTimelineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (video) {
      const time = parseFloat(e.target.value);
      video.currentTime = time;
      setCurrentTime(time);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const updateCurrentTime = () => {
      if (video) {
        setCurrentTime(video.currentTime);
      }
    };
    if (video) {
      video.addEventListener("timeupdate", updateCurrentTime);
    }
    return () => {
      if (video) {
        video.removeEventListener("timeupdate", updateCurrentTime);
      }
    };
  }, []);

  const max = videoRef.current ? videoRef.current.duration : 0;

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
        <div className="save-btn">
          <SaveButton onClick={handleSave} />
        </div>
        <video ref={videoRef} onClick={handleVideoClick}>
          <source src="/assets/imgs/video1.mp4" type="video/mp4" />
        </video>
        <div className="timeline">
          <input
            type="range"
            min={0}
            max={max}
            step={0.1}
            value={currentTime}
            onChange={handleTimelineChange}
          />
        </div>
      </div>

      <div className="workout-content-btn">
        <button onClick={() => history.goBack()}>Go Back</button>
      </div>
    </>
  );
};

export default About;
