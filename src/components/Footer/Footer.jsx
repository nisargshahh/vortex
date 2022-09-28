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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates neque natus ipsam, dicta fugiat unde obcaecati minus
                dolorem quaerat est animi odio mollitia distinctio dolore iste
                veritatis iusto enim! Aspernatur, optio nulla facilis deserunt,
                exercitationem culpa fuga esse cum dolore enim earum harum atque
                ullam sit, dolores fugiat impedit tempora!
              </p>
            </div>

            <div class="col-xs-6 col-md-3" id="quick-links">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
                <li>
                  <a href="/">Contribute</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Others</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    
          <div class="row">
              <p class="copyright-text">
                Created by
                <a href="#"> Nisarg Shah</a>,<a href="#"> Hima Verma</a> and
                <a href="#"> Sheetal Popat</a>.
              </p>
            </div>


      </footer>
    </div>
  );
}
