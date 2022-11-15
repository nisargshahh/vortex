import React, { Component } from "react";
import "./histogram.css";
import Plotly from "plotly.js-dist-min";

function HistogramP() {
  const x = [];
  let heads = 0;

  const num = prompt("Number of times the coin was flipped:");

  for (let i = 0; i < num; i++) {
    let r = Math.round(Math.random(0, 1));
    x[i] = r;
    if (r === 0) {
      heads += 1;
    }
  }

  let tails = num - heads;
  console.log("heads:", heads);
  console.log("tails:", tails);
  let probh = heads / num;
  let probt = tails / num;
  console.log("heads' probability:", probh);
  console.log("tails' probability:", probt);

  const trace = {
    x: x,
    type: "histogram",
    xbins: { end: x[num], start: x[0] },
  };
  document.getElementById("histo-data").innerHTML =
    "<p>After flipping the coin for <b>" +
    num +
    " times</b>, we get <b>" +
    heads +
    " heads</b>, and <b>" +
    tails +
    " tails</b>. The probability of getting heads becomes <b>" +
    probh +
    " </b>and the probabilty of getting tails is <b>" +
    probt +
    "</b></p>";
  Plotly.newPlot("histogram-div", [trace]);
}

export default class Histogram extends Component {
  render() {
    return (
      <div className="histogram">
        <h3 className="histo-heading">
          <u>Histogram</u>
        </h3>
        <div className="histo-para">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            minus repellat animi, tempore, corrupti debitis neque voluptatibus
            illum veritatis similique maxime voluptas ut perferendis accusamus
            iste molestias suscipit architecto! Eaque dolorum, unde hic expedita
            sapiente neque adipisci voluptatem ipsum architecto vel perferendis
            recusandae tenetur distinctio, exercitationem quos quibusdam
            excepturi nihil dicta labore quasi aliquid quas corporis aperiam
            quidem? Eum, illo!
          </p>
        </div>
        <button
          className="histo-btn"
          onClick={() => {
            HistogramP();
          }}
        >
          {" "}
          Simulate Coin Toss
        </button>
        <div id="histo-data"></div>
        <div id="histogram-div"></div>
      </div>
    );
  }
}
