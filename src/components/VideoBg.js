import React, { Component } from "react";
// import "./styles/VideoBg.css";
import Video from "../images/video/equastrian_sport.mp4";

class VideoBg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: Video
    };
  }

  render() {
    const videoStyle = {
      position: "absolute",
      width: "100%",
      // opacity: "0.9",
      // background: "black"
    };
  
    return (
      <div className="VideoBg" style={videoStyle}>
      {/* <div style={videoStyle}> */}
        <video
          id="background-video"
          loop
          autoPlay
          muted
          src={this.state.videoURL}
          type="video/mp4"
          // style={{"opacity":"0.9","background":"black"}}  
        />
      </div>
    );
  }
}

export default VideoBg;
