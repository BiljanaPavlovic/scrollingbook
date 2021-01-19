/** @format */

import React, { useEffect } from "react";
import "./party.css";
import AOS from "aos";

export default function Party() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="party">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus et
          voluptate veniam voluptatum neque earum, tempora, dolorem tempore
          dolor quia ratione voluptates animi obcaecati libero praesentium
          similique magni laboriosam quam.
        </p>
        <img
          src="/scrollingbook/images/party/balons.png"
          id="party-balons-one"
          alt="party girl"
        />
        <img
          src="/scrollingbook/images/party/partyGirl.png"
          id="party-girl"
          alt="party girl"
        />
        <img
          src="/scrollingbook/images/party/balons.png"
          id="party-balons-two"
          alt="party girl"
        />
      </div>
    </div>
  );
}
