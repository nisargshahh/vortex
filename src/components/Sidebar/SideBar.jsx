import React from "react";
import './sidebar.css'

export default function SideBar() {
  return (
    <div>
      <div class="s-layout">
        <div class="s-layout__sidebar">
          <a class="s-sidebar__trigger" href="#0">
            <i class="fa fa-bars"></i>
          </a>

          <nav class="s-sidebar__nav">
            <ul>
              <li>
                <a class="s-sidebar__nav-link" href="#0">
                  <i class="fa fa-home"></i>
                  About PGM
                </a>
              </li>
              <li>
                <a class="s-sidebar__nav-link" href="#0">
                  <i class="fa fa-home"></i>
                  Module Objectives
                </a>
              </li>
              <li>
                <a class="s-sidebar__nav-link" href="#0">
                  <i class="fa fa-home"></i>
                  List of Experiments
                </a>
              </li>
              <li>
                <a class="s-sidebar__nav-link" href="#0">
                  <i class="fa fa-home"></i>
                  Simulator
                </a>
              </li>
              <li>
                <a class="s-sidebar__nav-link" href="#0">
                  <i class="fa fa-home"></i>
                  Bayes Server
                </a>
              </li>
              <li>
                <a class="s-sidebar__nav-link" href="#0">
                  <i class="fa fa-home"></i>
                  Papers
                </a>
              </li>
              <li>
                <a class="s-sidebar__nav-link" href="#0">
                  <i class="fa fa-user"></i>
                  Feedback
                </a>
              </li>
              <li>
                <a class="s-sidebar__nav-link" href="#0">
                  <i class="fa fa-camera"></i>
                  Fact Corner
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
