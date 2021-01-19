/** @format */

import React, { useEffect } from "react";
import "./stillStudy.css";
import AOS from "aos";

export default function StillStudy() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div data-aos="fade-down">
      <div className="study">
        <div className="studyAnimation">
          <a
            href="https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q"
            target="_blanc"
          >
            <img
              src="/scrollingbook/images/stydy/deved.jpg"
              alt="study ico"
              className="study-ico"
              id="deved"
            />
          </a>
          <a href="https://www.thecampster.com/rs/" target="_blanc">
            <img
              src="/scrollingbook/images/stydy/kampster.jpg"
              alt="study ico"
              className="study-ico"
              id="kampster"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg"
            target="_blanc"
          >
            <img
              src="/scrollingbook/images/stydy/netninja.jpg"
              alt="study ico"
              className="study-ico"
              id="ninja"
            />
          </a>
          <a href="https://www.youtube.com/user/TechGuyWeb" target="_blanc">
            <img
              src="/scrollingbook/images/stydy/traversy.jpg"
              alt="study ico"
              className="study-ico"
              id="traversy"
            />
          </a>
          <img
            src="/scrollingbook/images/stydy/study.png"
            alt="life long learning"
            id="avatar-study"
          />
          <a
            href="https://www.youtube.com/channel/UC2srAn844KPVDpZzUE8VWsg"
            target="_blanc"
          >
            <img
              src="/scrollingbook/images/stydy/webcon.png"
              alt="study ico"
              className="study-ico"
              id="webcon"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw"
            target="_blanc"
          >
            <img
              src="/scrollingbook/images/stydy/webdev.jpg"
              alt="study ico"
              className="study-ico"
              id="webdev"
            />
          </a>
          <a href="https://www.mintbean.io/" target="_blanc">
            <img
              src="/scrollingbook/images/stydy/mintbean.png"
              alt="study ico"
              className="study-ico"
              id="mintbean"
            />
          </a>
        </div>
        <div data-aos="fade-down">
          <p className="study-p">
            At the end of the Bootcamp, I realized that I was at the beginning
            of the journey, so I studied all the sources on the Internet that I
            could come across. The more I learn, the more I have fun discovering
            the new possibilities that programming offers us. Here I have
            singled out my favorite links that I recommend to everyone who is in
            my place.
          </p>
        </div>
      </div>
    </div>
  );
}
