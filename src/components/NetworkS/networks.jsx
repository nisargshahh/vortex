import React, { Component } from "react";
import "./networks.css";

export default class NetworkS extends Component {
  handleClick = () => {
    window.open("https://graphonline.ru/en/", "_blank");
  };

    render() {
      return (
        <div className="network-sim">
          <button 
          className="network-btn"
          onClick={this.handleClick}>
            Go to simulation
          </button>
        </div>
      );
    }
  }