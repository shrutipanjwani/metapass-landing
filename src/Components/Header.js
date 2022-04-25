import React, { useEffect, useRef } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import "../Styles/Header.css";
import GradientButton from "./GradientButton";
import headerVideo from "../Assets/FloatingCard_Animation_4.mp4";
import polygon from "../Assets/polygon.png";
import solana from "../Assets/solana.png";
import superteamdao from "../Assets/superteamdao.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

import { Box, Image, Text } from "@chakra-ui/react";

const Header = () => {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let videoRef = useRef(null);

  let tl = new TimelineLite({ delay: 0.8 });
  useEffect(() => {
    const headerVideo = images.firstElementChild;
    const healineFirst = content.children[0].children[0];
    const healineSecond = healineFirst.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[3];

    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    tl.from(headerVideo, 1.2, { y: 1280, ease: Power3.easeOut }, "Start").from(
      headerVideo.firstElementChild,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      0.2
    );

    tl.staggerFrom(
      [healineFirst.children, healineSecond.children],
      1,
      {
        y: 58,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);

    AOS.init();
    AOS.refresh();
  });

  return (
    <header data-aos="fade-up" ref={(el) => (app = el)}>
      <div className="header-flex">
        <div className="header-content">
          <div className="header-content-inner" ref={(el) => (content = el)}>
            <h1>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">Tokenize your</div>
              </div>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">
                  ticketing experience.
                </div>
              </div>
            </h1>
            <p className="subtext-head" color="white">
              Metapass allows you to create events on Polygon and sell NFT
              tickets so you can token gate your event and also server proof of
              attendance.
            </p>
            <br />
            <div className="btn-row">
              <GradientButton>
                <a href="https://app.metapasshq.xyz/" target={"_blank"}>
                  {" "}
                  Create a new Event →
                </a>
              </GradientButton>
            </div>
          </div>
        </div>
        <div className="header-image">
          <div className="header-image-inner" ref={(el) => (images = el)}>
            <video
              controls={false}
              autoPlay
              loop
              playsInline
              muted
              ref={videoRef}
            >
              <source src={headerVideo} type="video/mp4" />
              Your Browser doesn't support videos.
            </video>
          </div>
        </div>
      </div>

      <Box display="flex" flexDir="column" mt="2" gap="4" align="center">
        <Text fontSize="3xl" textAlign="center" fontWeight="600">
          Backed by the best
        </Text>
        <Text color="#6b6f76" fontSize="sm">
          You're in good hands. Promise.
        </Text>
        <Box
          display="flex"
          flexDir="row"
          gap={{ base: "8", md: "16" }}
          ml={{ base: "4", md: "0" }}
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" flexDir="column" gap="2" alignItems="center">
            <Image
              src={polygon}
              h="14"
              w="14"
              alt="polygon"
              minH="14"
              minW="14"
            />
            Polygon Network
          </Box>
          <Box display="flex" flexDir="column" gap="2" alignItems="center">
            <Image
              h="14"
              w="14"
              src={solana}
              alt="polygon"
              rounded="full"
              minH="14"
              minW="14"
            />
            Solana Foundation
          </Box>
          <Box display="flex" flexDir="column" gap="2" alignItems="center">
            <Image
              h="14"
              w="14"
              minH="14"
              minW="14"
              src={superteamdao}
              alt="polygon"
              rounded="full"
            />
            Superteam DAO
          </Box>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
