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
          <img
            src="/scrollingbook/images/stydy/deved.jpg"
            alt="study ico"
            className="study-ico"
            id="deved"
          />
          <img
            src="/scrollingbook/images/stydy/kampster.jpg"
            alt="study ico"
            className="study-ico"
            id="kampster"
          />
          <img
            src="/scrollingbook/images/stydy/netninja.jpg"
            alt="study ico"
            className="study-ico"
            id="ninja"
          />
          <img
            src="/scrollingbook/images/stydy/traversy.jpg"
            alt="study ico"
            className="study-ico"
            id="traversy"
          />
          <img
            src="/scrollingbook/images/stydy/study.png"
            alt="life long learning"
            id="avatar-study"
          />

          <img
            src="/scrollingbook/images/stydy/webcon.png"
            alt="study ico"
            className="study-ico"
            id="webcon"
          />
          <img
            src="/scrollingbook/images/stydy/webdev.jpg"
            alt="study ico"
            className="study-ico"
            id="webdev"
          />
          <img
            src="/scrollingbook/images/stydy/mintbean.png"
            alt="study ico"
            className="study-ico"
            id="mintbean"
          />
        </div>
        <div data-aos="fade-down">
          <p className="study-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            et voluptate veniam voluptatum neque earum, tempora, dolorem tempore
          </p>
        </div>
      </div>
    </div>
  );
}
