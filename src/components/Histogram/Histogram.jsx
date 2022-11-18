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
            A histogram is a graphical representation of a grouped frequency distribution with continuous classes. 
      It is an area diagram and can be defined as a set of rectangles with bases along with the intervals between class boundaries
      and with areas proportional to frequencies in the corresponding classes. In such representations, all the rectangles are adjacent since 
      the base covers the intervals between class boundaries. The heights of rectangles are proportional to corresponding 
      frequencies of similar classes and for different classes, the heights will be proportional to corresponding frequency densities.
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
