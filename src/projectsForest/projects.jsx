/** @format */

import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div class="slideshow">
      <img
        src="/scrollingbook/images/projects/avatar.png"
        alt="project i done"
        className="projects-avatar"
      />
      <div class="content">
        <div class="carasoul">
          <figure class="shadow">
            <a
              href="https://biljanapavlovic.github.io/landing-page-practis-/#about"
              target="_blanck"
            >
              <img src="/scrollingbook/images/projects/1.png" alt="project" />
            </a>
          </figure>
          <figure class="shadow">
            <a href="https://birtije.000webhostapp.com/" target="_blanck">
              <img src="/scrollingbook/images/projects/2.png" alt="project" />
            </a>
          </figure>
          <figure class="shadow">
            <a
              href="https://js-samuraji.github.io/staznam.rs/"
              target="_blanck"
            >
              <img src="/scrollingbook/images/projects/3.png" alt="project" />
            </a>
          </figure>
          <figure class="shadow">
            <a
              href="https://biljanapavlovic.github.io/calculator/"
              target="_blanck"
            >
              <img src="/scrollingbook/images/projects/4.png" alt="project" />
            </a>
          </figure>
          <figure class="shadow">
            <a
              href="https://biljanapavlovic.github.io/Quotes/"
              target="_blanck"
            >
              <img src="/scrollingbook/images/projects/5.png" alt="project" />
            </a>
          </figure>
          <figure class="shadow">
            <a
              href="https://biljanapavlovic.github.io/spaceX/"
              target="_blanck"
            >
              <img src="/scrollingbook/images/projects/6.png" alt="project" />
            </a>
          </figure>
          <figure class="shadow">
            <a
              href="https://github.com/BiljanaPavlovic/Tic-tac-toe-game"
              target="_blanck"
            >
              <img src="/scrollingbook/images/projects/7.png" alt="project" />
            </a>
          </figure>
          <figure class="shadow">
            <a
              href="https://biljanapavlovic.github.io/MarkoKraljevicTrans/"
              target="_blanck"
            >
              <img src="/scrollingbook/images/projects/8.png" alt="project" />
            </a>
          </figure>
          <figure class="shadow">
            <a
              href="https://biljanapavlovic.github.io/MarvelApiChallenge/"
              target="_blanck"
            >
              <img src="/scrollingbook/images/projects/9.png" alt="project" />
            </a>
          </figure>
        </div>
      </div>
    </div>
  );
}
