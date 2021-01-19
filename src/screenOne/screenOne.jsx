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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus et
          voluptate veniam voluptatum neque earum, tempora, dolorem tempore
          dolor quia ratione voluptates animi obcaecati libero praesentium
          similique magni laboriosam quam.
        </p>
        <img
          src="/scrollingbook/images/firstScreen/phone.png"
          id="phone"
          alt="phone"
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
