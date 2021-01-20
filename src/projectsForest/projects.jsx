/** @format */

import React, { useEffect } from "react";
import "./projects.css";
import AOS from "aos";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div data-aos="fade-up">
      <div class="slideshow">
        <p className="projects-p">
          Along the way, I gain many skills, I am most interested in the
          frontend, and here you can see my tech competences and also the
          projects I have worked on.
        </p>
        <div className="skills">
          <div className="skills-ico-one">
            <img
              src="/scrollingbook/images/projects/html.png"
              alt="HTML"
              className="skill-icon"
            />
            <img
              src="/scrollingbook/images/projects/css.png"
              alt="CSS"
              className="skill-icon"
            />
            <img
              src="/scrollingbook/images/projects/bootstrap.png"
              alt="Bootstrap"
              className="skill-icon"
            />
            <img
              src="/scrollingbook/images/projects/sass.png"
              alt="Saas"
              className="skill-icon"
            />
          </div>
          <div className="skills-ico-two">
            <img
              src="/scrollingbook/images/projects/js.png"
              alt="JavaScript"
              className="skill-icon"
            />
            <img
              src="/scrollingbook/images/projects/react.png"
              alt="React"
              className="skill-icon"
            />
            <img
              src="/scrollingbook/images/projects/git.png"
              alt="Git"
              className="skill-icon"
            />
            <img
              src="/scrollingbook/images/projects/wordpress.png"
              alt="Wordpress"
              className="skill-icon"
            />
          </div>
        </div>
        <div className="content-div">
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
                  <img
                    src="/scrollingbook/images/projects/1.png"
                    alt="project"
                  />
                </a>
              </figure>
              <figure class="shadow">
                <a href="https://birtije.000webhostapp.com/" target="_blanck">
                  <img
                    src="/scrollingbook/images/projects/2.png"
                    alt="project"
                  />
                </a>
              </figure>
              <figure class="shadow">
                <a
                  href="https://js-samuraji.github.io/staznam.rs/"
                  target="_blanck"
                >
                  <img
                    src="/scrollingbook/images/projects/3.png"
                    alt="project"
                  />
                </a>
              </figure>
              <figure class="shadow">
                <a
                  href="https://biljanapavlovic.github.io/calculator/"
                  target="_blanck"
                >
                  <img
                    src="/scrollingbook/images/projects/4.png"
                    alt="project"
                  />
                </a>
              </figure>
              <figure class="shadow">
                <a
                  href="https://biljanapavlovic.github.io/Quotes/"
                  target="_blanck"
                >
                  <img
                    src="/scrollingbook/images/projects/5.png"
                    alt="project"
                  />
                </a>
              </figure>
              <figure class="shadow">
                <a
                  href="https://biljanapavlovic.github.io/spaceX/"
                  target="_blanck"
                >
                  <img
                    src="/scrollingbook/images/projects/6.png"
                    alt="project"
                  />
                </a>
              </figure>
              <figure class="shadow">
                <a
                  href="https://github.com/BiljanaPavlovic/Tic-tac-toe-game"
                  target="_blanck"
                >
                  <img
                    src="/scrollingbook/images/projects/7.png"
                    alt="project"
                  />
                </a>
              </figure>
              <figure class="shadow">
                <a
                  href="https://biljanapavlovic.github.io/MarkoKraljevicTrans/"
                  target="_blanck"
                >
                  <img
                    src="/scrollingbook/images/projects/8.png"
                    alt="project"
                  />
                </a>
              </figure>
              <figure class="shadow">
                <a
                  href="https://biljanapavlovic.github.io/MarvelApiChallenge/"
                  target="_blanck"
                >
                  <img
                    src="/scrollingbook/images/projects/9.png"
                    alt="project"
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
