import React from "react";
import "./footer.css";
import letterhead2 from "../../components/Images/letterhead2.png"
import web from "../../components/Images/web.jpeg"
import { FaInstagram } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              {/* <h6>About</h6> */}
              {/* <p class="text-justify">
                Vortex aims to give comprehensive introduction of probabilistic graphical
                models. It makes inferences, learning, actions and decisions
                while applying these models. We introduce real-world trade offs
                when using probabilistic graphical models in practice. This enables us to
                develop the knowledge and skills necessary to apply these models
                to solve real world problems.
              </p> */}
              <img className="letterhead2" src={letterhead2} alt="K J Somaiya"></img>
            </div>

            <div class="col-xs-2 col-md-5" id="quick-links">
              <h6>Developed and Maintained by: </h6>
              <ul class="footer-links">
                <li>
                  <b>Department of Computer Engineering</b>
                </li>
                <li>
                  <b>K. J. Somaiya Institute of Technology, Sion, Mumbai</b>
                </li>
                <br></br>
                <li>
                  <a href="https://instagram.com/kjsit_official?igshid=MzRlODBiNWFlZA=="> <FaInstagram size={35} /> </a> &nbsp; <a href="https://kjsit.somaiya.edu.in/en"> <TbWorldWww size={35} /> </a> &nbsp; <FaFacebook size={35} />
                  {/* <img className="web" src={web} alt="Website logo "></img> */}
                  {/* <a href="/papers">Papers</a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr
          style={{
            background: "#000000",
            height: "3px",
            border: "none",
          }}
        />
        <div class="row">
          <p class="copyright-text">
            Created by
            <a href="https://github.com/nisargshahh"> Nisarg Shah</a>,<a href="https://github.com/hima-v"> Hima Verma</a> and
            <a href="https://github.com/sheetal-12"> Sheetal Popat</a>.
            <br></br>
            Guided by: Dr Sarita Ambadekar, Prof. Pradnya Patil, Department of Computer Engineering, KJSIT
          </p>
        </div>
      </footer >
    </div >
  );
}
