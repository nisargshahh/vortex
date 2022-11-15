import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                Vortex aims to give comprehensive introduction of probabilistic graphical
                models. It makes inferences, learning, actions and decisions
                while applying these models. We introduce real-world trade offs
                when using probabilistic graphical models in practice. This enables us to
                develop the knowledge and skills necessary to apply these models
                to solve real world problems.
              </p>
            </div>

            <div class="col-xs-6 col-md-3" id="quick-links">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="/about-pgm">About</a>
                </li>
                <li>
                  <a href="/feedback">Contact Us</a>
                </li>
                <li>
                  <a href="/papers">Papers</a>
                </li>
                <li>
                  <a href="/projects">Projects</a>
                </li>
                <li>
                  <a href="/module-obj">Objectives</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <p class="copyright-text">
            Created by
            <a href="https://github.com/nisargshahh"> Nisarg Shah</a>,<a href="https://github.com/hima-v"> Hima Verma</a> and
            <a href="https://github.com/sheetal-12"> Sheetal Popat</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}
