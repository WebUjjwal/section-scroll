"use client";

import { useGSAP } from "@gsap/react";
import "./style.css";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".banner_main", {
      scrollTrigger: {
        trigger: ".banner_main",
        scrub: 1,
        pin: ".banner_main",
      },
    });

    tl.to(".box1", {
      opacity: 1,
      visibility: "visible",
      ease: "elastic.out(1,0.3)",
      duration: 4,
      scrollTrigger: {
        trigger: ".box1",
        start: "top top",
        pin: ".box1",
        scrub: 1,
        end: "bottom bottom",
      },
    });

    tl.to(".box2", {
      opacity: 1,
      visibility: "visible",
      ease: "elastic.out(1,0.3)",
      duration: 4,
      scrollTrigger: {
        trigger: ".box2",
        start: "15% top",
        pin: ".box2",
        scrub: 1,
        end: "bottom bottom",
      },
    });

    tl.to(".box3", {
      opacity: 1,
      visibility: "visible",
      ease: "elastic.out(1,0.3)",

      scrollTrigger: {
        trigger: ".box3",
        start: "30% top",
        pin: ".box3",
        scrub: 1,
        end: "bottom bottom",
      },
    });

    tl.to(".box4", {
      opacity: 1,
      visibility: "visible",
      ease: "elastic.out(1,0.3)",

      scrollTrigger: {
        // markers: true,
        trigger: ".box4",
        start: "45% top",
        pin: ".box4",
        scrub: 1,
        end: "bottom bottom",
      },
    });

    tl.to(".box5", {
      opacity: 1,
      visibility: "visible",
      ease: "elastic.out(1,0.3)",

      scrollTrigger: {
        trigger: ".box5",
        start: "60% top",
        pin: ".box5",
        scrub: 1,
        end: "bottom bottom",
      },
    });

    tl.to(".box6", {
      opacity: 1,
      visibility: "visible",
      ease: "elastic.out(1,0.3)",

      scrollTrigger: {
        trigger: ".box6",
        start: "75% top",
        pin: ".box6",
        scrub: 1,
        end: "bottom bottom",
      },
    });

    tl.to(".box7", {
      opacity: 1,
      visibility: "visible",
      ease: "elastic.out(1,0.3)",

      scrollTrigger: {
        trigger: ".box7",
        start: "90% top",
        pin: ".box7",
        scrub: 1,
        end: "bottom bottom",
      },
    });
  }, []);

  //   tl.to(".box2", {
  //     opacity: 1,
  //     visibility: "visible",
  //     ease: "elastic.out(1,0.3)",
  //     duration: 4,
  //     scrollTrigger: {
  //       trigger: ".box2",
  //       start: "top top",
  //       pin: ".box2",
  //       scrub: 1,
  //       end: "60% bottom",
  //     },
  //   });

  //   tl.to(".box3", {
  //     opacity: 1,
  //     visibility: "visible",
  //     ease: "elastic.out(1,0.3)",

  //     scrollTrigger: {
  //       trigger: ".box3",
  //       start: "top top",
  //       pin: ".box3",
  //       scrub: 1,
  //       end: "60% bottom",
  //     },
  //   });

  //   tl.to(".box4", {
  //     opacity: 1,
  //     visibility: "visible",
  //     ease: "elastic.out(1,0.3)",

  //     scrollTrigger: {
  //       trigger: ".box4",
  //       start: "top top",
  //       pin: ".box4",
  //       scrub: 1,
  //       end: "60% bottom",
  //     },
  //   });

  //   tl.to(".box5", {
  //     opacity: 1,
  //     visibility: "visible",
  //     ease: "elastic.out(1,0.3)",

  //     scrollTrigger: {
  //       trigger: ".box5",
  //       start: "top top",
  //       pin: ".box5",
  //       scrub: 1,
  //       end: "60% bottom",
  //     },
  //   });

  //   tl.to(".box6", {
  //     opacity: 1,
  //     visibility: "visible",
  //     ease: "elastic.out(1,0.3)",

  //     scrollTrigger: {
  //       trigger: ".box6",
  //       start: "top top",
  //       pin: ".box6",
  //       scrub: 1,
  //       end: "60% bottom",
  //     },
  //   });

  //   tl.to(".box7", {
  //     opacity: 0,
  //     visibility: "hidden",
  //     ease: "elastic.out(1,0.3)",

  //     scrollTrigger: {
  //       trigger: ".box7",
  //       start: "top top",
  //       pin: ".box7",
  //       scrub: 1,
  //       end: "60% bottom",
  //     },
  //   });

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="banner_main">
        <div className="container">
          <div className="banner_items">
            <div className="box box1">
              <p className="text">1</p>
            </div>
            <div className="box box2">
              <p className="text">2</p>
            </div>
            <div className="box box3">
              <p className="text">3</p>
            </div>
            <div className="box box4">
              <p className="text">4</p>
            </div>
            <div className="box box5">
              <p className="text">5</p>
            </div>
            <div className="box box6">
              <p className="text">6</p>
            </div>
            <div className="box box7">
              <p className="text">7</p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Banner;
