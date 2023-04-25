import React, { Component } from "react";
import NetworkSimulator from "../../pages/NetworkSimulator/NetworkSimulator";
import "./networks.css";

export default class NetworkS extends Component {
    render() {
      return (
        <div >
          <Link to= "/network-simulator">
          <button
            className="network-btn"
            onClick={() => {
                NetworkSimulator()
            }}
          >
            {" "}
            Go to simulation
          </button>
          </Link>
          
        </div>
      );
    }
  }
  