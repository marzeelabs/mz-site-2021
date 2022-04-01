import { useEffect, useRef } from 'react';
import { gsap } from "gsap-trial/dist/gsap";

import MorphSVGPlugin from "gsap-trial/dist/MorphSVGPlugin";

const HomepageBubbles = () => {

  // store a reference to the box div
  // const bubbleRef = useRef();

  // // wait until DOM has been rendered
  // useEffect(() => {
  //   gsap.registerPlugin(MorphSVGPlugin);
  //   //gsap.to(bubbleRef.current, { rotation: "+=360" });
  //   //gsap.to("#bubble-demo-path", {duration: 5, morphSVG: "M178.401,4.6516c62.4577,16.8438,138.6528,119.4832,81.2054,169.2894-41.19,35.7109-51.0266,94.071-115.3957,88.02-89.674-8.43-168.29-81.3216-129.64-162.584C47.2208,30.7282,107.5328-11.9319,178.401,4.6516Z"});
  // });

  return (
    <>
      <section className="homepage-intro__bubbles__wrapper">
        <svg id="bubble-demo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 613.7489 267.3368">
          <defs>
            <linearGradient id="linear-gradient" x1="141.4572" y1="264.4099" x2="141.4572" y2="1.698" gradientUnits="userSpaceOnUse">
              <stop offset="0.0003" stopColor="#2f06ae" />
              <stop offset="0.9997" stopColor="#7d58f1" />
            </linearGradient>
          </defs>
          <path id="bubble-demo-path" d="M178.401,4.6516c62.4577,16.8438,131.1009,102.073,86.9213,163.9521-33.7656,37.609-58.6412,110.0138-121.1116,93.3571C77.42,248.59-31.4734,176.69,14.57,99.3768,50.3123,44.2744,107.5328-11.9319,178.401,4.6516Z" transform="translate(-1.5476 0.9269)" style={{stroke: '#693df3', strokeWidth: 4, fill: 'url(#linear-gradient)'}} />
          <path d="M511.7605,4.6516c62.4577,16.8438,138.6528,119.4832,81.2054,169.2894-41.19,35.7109-51.0266,94.071-115.3957,88.02-89.674-8.43-168.29-81.3216-129.64-162.584C380.58,30.7282,440.8923-11.9319,511.7605,4.6516Z" transform="translate(-1.5476 0.9269)" style={{fill: 'none', stroke: '#693df3', strokeWidth: 4}} />
        </svg>

      </section>

      {/* end bubbles */}
    </>
  )};

export default HomepageBubbles;
