/** @format */

import React, { useEffect } from "react";
import "./screenOne.css";
import AOS from "aos";

export default function ScreenOne() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <div className="screen-one">
        <p>
          One evening during September 2019, I was at home scrolling through
          Facebook, and one fascinating ad caught my attention. I read about a
          new opportunity to get a lot of functional web development knowledge
          in ITBootcamp, so I applied.
        </p>
        <img
          src="/scrollingbook/images/firstScreen/accepted.png"
          alt="accepted"
          id="accepted"
        />
        <img
          src="/scrollingbook/images/firstScreen/phone.png"
          id="phone"
          alt="phone"
        />
        <img
          src="/scrollingbook/images/firstScreen/coursera.png"
          alt="coursera"
          id="coursera"
        />
        <img
          src="/scrollingbook/images/firstScreen/css.png"
          id="css"
          alt="css icon"
        />
        <img
          src="/scrollingbook/images/firstScreen/html.png"
          id="html"
          alt="html icon"
        />

        <img
          src="/scrollingbook/images/firstScreen/womanOnCouch.png"
          id="couch"
          alt="woman on couch"
        />
      </div>
    </div>
  );
}
