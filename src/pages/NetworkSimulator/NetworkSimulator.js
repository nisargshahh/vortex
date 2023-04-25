import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/Footer/Footer";
import './NetworkSimulator.css'

function NetworkSimulator() {
    return (
      <div>
        <div className="network-simulator">
        <iframe src="https://graphonline.ru/en/" name="NS" title="NS"></iframe>
        </div>
        <Footer />
      </div>
    );
}
  
  export default NetworkSimulator;