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
        <div className="party-header">
          <p className="party-p">
            After all the hard work, we received certificates and organized a
            well-deserved party where we had a great time.
          </p>
          <img
            src="/scrollingbook/images/party/potvrda2.jpg"
            id="certificate"
            alt="certificate"
          />
        </div>
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
