/** @format */

import React, { useEffect } from "react";
import "./projects.css";
import AOS from "aos";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="projects-component">
      <h2>Projects Forest</h2>
      <img src="images/projects/avatar.png" alt="project i done" />
      <div className="projects-div">
        <div data-aos="flip-left">
          <img
            src="images/projects/1.png"
            alt="project i done"
            className="project"
          />
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <img
            src="images/projects/2.png"
            alt="project i done"
            className="project"
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <img
            src="images/projects/12.png"
            alt="project i done"
            className="project"
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <img
            src="images/projects/7.png"
            alt="project i done"
            className="project"
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <img
            src="images/projects/6.png"
            alt="project i done"
            className="project"
          />
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src="images/projects/4.png"
            alt="project i done"
            className="project"
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center">
          <img
            src="images/projects/3.png"
            alt="project i done"
            className="project"
          />
        </div>

        <div data-aos="flip-right">
          <img
            src="images/projects/10.png"
            alt="project i done"
            className="project"
          />
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="center-center">
          <img
            src="images/projects/8.png"
            alt="project i done"
            className="project"
          />
        </div>

        <div data-aos="fade-down-left">
          <img
            src="images/projects/9.png"
            alt="project i done"
            className="project"
          />
        </div>
        <div data-aos="fade-down-right">
          <img
            src="images/projects/5.png"
            alt="project i done"
            className="project"
          />
        </div>

        <div data-aos="fade-up">
          <img
            src="images/projects/11.png"
            alt="project i done"
            className="project"
          />
        </div>
        <div data-aos="flip-left">
          <img
            src="images/projects/13.png"
            alt="project i done"
            className="project"
          />
        </div>
        <div data-aos="flip-right">
          <img
            src="images/projects/14.png"
            alt="project i done"
            className="project"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <img
            src="images/projects/15.png"
            alt="project i done"
            className="project"
          />
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src="images/projects/16.png"
            alt="project i done"
            className="project"
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src="images/projects/17.png"
            alt="project i done"
            className="project"
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src="images/projects/18.png"
            alt="project i done"
            className="project"
          />
        </div>
      </div>
    </div>
  );
}
