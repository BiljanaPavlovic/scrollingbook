/** @format */

import React, { useEffect } from "react";
import "./footer.css";
import AOS from "aos";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div data-aos="flip-up">
      <div className="footer">
        <div className="contact">
          <a
            href="https://www.linkedin.com/in/biljana-pavlovic-29a0907b/"
            target="_blanc"
          >
            <img
              src="/scrollingbook/images/footer/linkedin.png"
              className="soc-ico"
              alt="soc-ico"
            />
          </a>
          <a href="https://github.com/BiljanaPavlovic" target="_blanc">
            <img
              src="/scrollingbook/images/footer/github.png"
              className="soc-ico"
              alt="soc-ico"
            />
          </a>
          <a
            href="https://www.instagram.com/biljana_pavlovic_111/"
            target="_blanc"
          >
            <img
              src="/scrollingbook/images/footer/instagram.png"
              className="soc-ico"
              alt="soc-ico"
            />
          </a>
          <a href="https://www.facebook.com/biljana.pavlovic1/" target="_blanc">
            <img
              src="/scrollingbook/images/footer/facebook.png"
              className="soc-ico"
              alt="soc-ico"
            />
          </a>
          <a
            href="https://biljanapavlovic.github.io/portfolio/"
            target="_blanc"
          >
            <img
              src="/scrollingbook/images/footer/b.png"
              className="soc-ico"
              alt="soc-ico"
            />
          </a>
          <a
            href="/scrollingbook/images/footer/BiljanaPavlovicCV1.pdf"
            download
          >
            <img
              src="/scrollingbook/images/footer/DownloadCV.png"
              alt="Download CV"
              className="soc-ico"
            />
          </a>
          <li>
            <img
              src="/scrollingbook/images/footer/gmail.png"
              className="soc-ico"
              alt="soc-ico"
            />
            zabiljanupavlovic@gmail.com
          </li>
        </div>
        <img
          src="/scrollingbook/images/footer/contactAvatar.png"
          alt="soc-ico"
          className="contact-avatar"
        />
        <p> &copy; Made by Biljana Pavlovic 2021.</p>
      </div>
    </div>
  );
}
