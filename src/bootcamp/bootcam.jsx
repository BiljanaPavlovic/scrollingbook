/** @format */

import React, { useEffect } from "react";
import "./bootcamp.css";
import AOS from "aos";

export default function Bootcam() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <div className="bootcamp">
        <div className="bootcampAnimation">
          <img
            src="/scrollingbook/images/itbootcamp/itbootcamp.png"
            id="itbootcamp-logo"
            alt="itbootcamp logo"
          />

          <img
            src="/scrollingbook/images/itbootcamp/git.png"
            id="git-ico"
            alt="git logo"
          />

          <img
            src="/scrollingbook/images/itbootcamp/js.png"
            id="js-ico"
            alt="javaScript logo"
          />
          <img
            src="/scrollingbook/images/itbootcamp/react.png"
            id="react-ico"
            alt="react logo"
          />

          <img
            src="/scrollingbook/images/itbootcamp/zaStolom.png"
            id="school-woman"
            alt="women at school"
          />
        </div>
        <div className="p">
          <p>
            I returned to school for ten intensive weeks. It was much harder
            than I expected. But with great lecturers and friends, I managed to
            pass all the homework and all the tests and graduate from this
            renominated course.
          </p>
        </div>
      </div>
    </div>
  );
}
