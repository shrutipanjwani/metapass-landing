import React, { useEffect, useRef } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import "../Styles/Header.css";
import GradientButton from "./GradientButton";
import { Flex } from "@chakra-ui/react";
import headerVideo from "../Assets/FloatingCard_Animation_4.mp4";
import polygon from "../Assets/polygon.png";
import { IoTicket } from "react-icons/io5";
import solana from "../Assets/solana.png";
import superteamdao from "../Assets/superteamdao.jpeg";
import buildspace from "../Assets/buildspace.jpg";
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
              Metapass allows you to create events on Polygon and Solana and
              sell NFT tickets so you can token gate your event and also serve
              proof of attendance.
            </p>
            <br />
            <div>
              <GradientButton>
                <a href="https://app.metapasshq.xyz" target={"_blank"}>
                  {" "}
                  <Flex align="center" justify="space-between">
                    {" "}
                    Create an event{" "}
                    <Box ml="2" fontSize="xl">
                      {/* <IoTicket size="20" /> */}
                      {"✨"}
                    </Box>
                  </Flex>
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

      <Box
        display="flex"
        flexDir="column"
        mt="2"
        gap="4"
        align="center"
        mb="120px"
      >
        <Text fontSize="3xl" textAlign="center" fontWeight="600">
          Backed by the best
        </Text>
        <Text color="#6b6f76" fontSize="sm">
          You're in good hands. Promise.
        </Text>
        <Box display="flex" flexDir="column">
          <Flex
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
                alt="Polygon"
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
                alt="Solana"
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
                alt="SuperteamDAO"
                rounded="full"
              />
              Superteam DAO
            </Box>
          </Flex>
          <Flex
            align="center"
            gap={{ base: "8", md: "16" }}
            ml={{ base: "4", md: "0" }}
            mt="20"
            justifyContent="center"
            alignContent="center"
          >
            <Box display="flex" flexDir="column" gap="2" alignItems="center">
              <Image
                h="20"
                // w="12"
                minH="12"
                // minW="12"
                src={
                  "https://res.cloudinary.com/dev-connect/image/upload/c_crop,h_644,w_2130/v1666186301/img/buildspace_logo_elsidg.png"
                }
                alt="Buildspace"
                // rounded="full"
              />
              {/* Buildspace */}
            </Box>
            <Box display="flex" flexDir="column" gap="2" alignItems="center">
              <Image
                h="12"
                // w="12"
                minH="12"
                // minW="12"
                src={
                  "https://github.com/devfolioco/brand-assets/blob/main/Logo%20+%20Text%20-%20Colored/Devfolio%20-%20Normal.png?raw=true"
                }
                alt="Devfolio"
                // rounded="full"
              />
              {/* Devfolio.co */}
            </Box>
          </Flex>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
