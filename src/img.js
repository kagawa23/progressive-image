import React, { Component, PropTypes } from "react";
import "./progressiveImage.css";

export default class ProgressiveImage extends Component {
  constructor() {
    super();
    this.state = {
      smallReady: false,
      largeReady: false
    };
  }

  componentDidMount() {
    this.small.onload = () => {
      this.setState({ smallReady: true });
    };
    this.large.onload = () => {
      this.setState({ largeReady: true });
    };
  }

  render() {
    const { sImg, lImg } = this.props;
    const smallClass = `small-image ${this.state.smallReady ? "load" : ""}`;
    const largeClass = `large-image ${this.state.largeReady ? "load" : ""}`;

    return (
      <div id="pImg" className="progress-image">
        <img
          src={sImg}
          className={smallClass}
          alt="small-image"
          ref={e => {
            this.small = e;
          }}
        />
        <img
          src={lImg}
          className={largeClass}
          alt="large-image"
          ref={e => {
            this.large = e;
          }}
        />
      </div>
    );
  }
}

