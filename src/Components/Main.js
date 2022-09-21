import React, { useRef } from "react";
import "../Styles/Main.css";
import GradientButton from "./GradientButton";
import Button from "./Button";
import { Box, Image, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faQrcode } from "@fortawesome/free-solid-svg-icons";
// import {} from "@fortawesome/fontawesome-svg-core"
import token from "../Assets/gate.m4v";
import chingari from "../Assets/chingari.svg";
import huddle01 from "../Assets/huddle01.svg";
import ftxsuperteam from "../Assets/ftxsuperteam.svg";
import phnix from "../Assets/phnix.jpg";
import live from "../Assets/Surf2.mp4";
import ticket from "../Assets/ticket1.png";
import TwitterFeed from "./TwitterFeed";
import { Flex } from "@chakra-ui/react";
import { IoIosCall } from "react-icons/io";
import web3bharat from "../Assets/web3bharat.jpg";
// import { ReactComponent as ChartIcon } from "./chart-svgrepo-com.svg";
import superteamdao from "../Assets/superteamdao.jpeg";
const Main = () => {
  return (
    <main>
      <div className="features-grid" data-aos="fade-up">
        <div className="feature-image">
          <video playsInline autoPlay muted loop width={600} src={token} />
        </div>
        <div className="feature-grid-content">
          <h1>Token gate your events</h1>
          <p>
            Create NFT Tickets in less than 1 minute and token gate your events
            with ease and prevent fake tickets with the power of NFTs.
          </p>
          <a href="/">
            Learn more <FontAwesomeIcon icon={faArrowRight} />{" "}
          </a>
        </div>
        <div className="feature-grid-content">
          <h1>Built for a Multichain Future</h1>
          <p>
            We're live on Polygon and Solana, this means that buy and selling
            tickets will be fast and inexpensive.
          </p>
          <a href="/">
            Learn more <FontAwesomeIcon icon={faArrowRight} />{" "}
          </a>
        </div>
        <div className="feature-image">
          <video
            playsInline
            autoPlay
            muted
            loop
            width={600}
            src={live}
            alt="live"
          />
        </div>
      </div>
      <div className="features-method" data-aos="fade-up">
        <h1>Fast and easy ticket verification</h1>
        <p>Built with security and easy-of-use in mind.</p>
        <div className="methods-flex">
          <div className="method-image">
            <img src={ticket} alt="ticket" />
          </div>
          <div className="method-content">
            <a href="/">
              <div className="method-content-box">
                <svg
                  className="f-svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  radius="0px"
                  strokeLinecap="square"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                >
                  <path d="M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M8,17c0,0.6-0.4,1-1,1s-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1V17z M13,17c0,0.6-0.4,1-1,1s-1-0.4-1-1V7c0-0.6,0.4-1,1-1s1,0.4,1,1V17z M18,17c0,0.6-0.4,1-1,1s-1-0.4-1-1v-6c0-0.6,0.4-1,1-1s1,0.4,1,1V17z" />
                </svg>
                <p>Metapass Dashboard to view event statistics</p>
              </div>
            </a>
            <br />
            <a href="/">
              <div className="method-content-box">
                <FontAwesomeIcon className="f-icon" icon={faQrcode} />
                <p>One time QR code for IRL Events</p>
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="hear-com">Our Clients</div>
          <Box
            display="flex"
            flexDir={["column", "column", "row", "row"]}
            gap={{ base: "8", md: "16" }}
            ml={{ base: "4", md: "0" }}
            justifyContent="center"
            alignContent="center"
          >
            <Box
              display="flex"
              flexDir="column"
              mt="6"
              gap="2"
              alignItems="center"
            >
              <Image
                src={chingari}
                h="100%"
                w="100%"
                alt="polygon"
                // minH="14"
                // minW="14"
              />
              <Link href="https://gari.network">Chingari</Link>
            </Box>
            <Box
              display="flex"
              flexDir="column"
              mt="6"
              ml="2"
              gap="2"
              alignItems="center"
            >
              <Image
                src={huddle01}
                h="5%"
                w="100%"
                alt="polygon"
                minH="14"
                minW="14"
              />
              <Link href="https://huddle01.com">Huddle01</Link>
            </Box>
            <Box
              display="flex"
              flexDir="column"
              mt="6"
              gap="2"
              alignItems="center"
            >
              <Image
                src={ftxsuperteam}
                h="100%"
                w="100%"
                alt="ftxsuperteam"
                // minH="14"
                // minW="14"
              />
              <Link href="https://ftxsuperteam.com">FTX Superteam</Link>
            </Box>
          </Box>
          <Flex
            justifyContent="center"
            flexDir={["column", "column", "row", "row"]}
            gap="16"
          >
            <Box
              display="flex"
              flexDir="column"
              mt="6"
              gap="2"
              alignItems="center"
            >
              <Image
                src={superteamdao}
                // h="80%"
                borderRadius="full"
                // w="30%"
                h="24"
                alt="SuperteamDAO"
                // minH="14"
                // minW="14"
              />
              <Link href="https://superteam.fun">SuperteamDAO</Link>
            </Box>
            <Box
              display="flex"
              flexDir="column"
              mt="6"
              gap="2"
              alignItems="center"
            >
              <Image
                src={phnix}
                // h="75%"
                h="24"
                borderRadius="full"
                // w="50%"
                alt="ThePhoenixGuild"
                // minH="14"
                // minW="14"
              />
              <Link href="https://mobile.twitter.com/phoenixguildhq">
                ThePhoenixGuild
              </Link>
            </Box>

            <Box
              display="flex"
              flexDir="column"
              mt="6"
              gap="2"
              alignItems="center"
            >
              <Image
                src={web3bharat}
                // h="75%"
                h="24"
                borderRadius="full"
                // w="30%"
                alt="Web3 Bharat"
                // minH="14"
                // minW="14"
              />
              <Link href="https://mobile.twitter.com/web3bharat">
                Web3 Bharat
              </Link>
            </Box>
          </Flex>
        </div>
        <div>
          <div className="hear-com">Hear from our community</div>
        </div>
        <TwitterFeed />
        <div className="pricing" data-aos="fade-up">
          <h1>Pricing</h1>
          <p>There's something for everyone</p>
          <br />
          <div className="pricing-section">
            <div className="pricing-box">
              <h1 id="special-price">Indie</h1>
              <div className="price-flex">
                {/* <span className="on-each-ticket">on each ticket</span> */}
                <br />
                <span>Zero Fees</span>
              </div>
              <ul>
                <li>Make Unlimited events</li>
                <hr />
                <li>Upto 100 Tickets</li>
                <hr />
                <li>Online {"&"} IRL events</li>
                <hr />
                <li>Discord {"&"} Huddle Integration</li>
                <hr />
                <li>Custom Ticket Template</li>
                <hr />
                <li>Gasless Mints</li>
              </ul>
              <GradientButton>
                <a
                  href="
               https://calendly.com/metapasshq
                "
                >
                  <Flex align="center" justify="space-between">
                    {" "}
                    Book a Demo{" "}
                    <Box ml="2">
                      <IoIosCall />
                    </Box>
                  </Flex>
                </a>
              </GradientButton>
            </div>

            <div className="pricing-box">
              <h1 id="special-price">Studio</h1>
              <div className="price-flex">
                <br />
                <span>Starting at $12 per month</span>
              </div>

              <ul>
                <li>Everything in Indie</li>
                <hr />
                <li>Make Unlimited events</li>
                <hr />
                <li>No limit on tickets</li>
                <hr />
                <li>Event Management Dashboard</li>
                <hr />
                <li>Priority customer service</li>
                <hr />
                <li>Custom subdomain</li>
              </ul>

              <GradientButton>
                <a
                  href="
               https://calendly.com/metapasshq
                "
                >
                  <Flex align="center" justify="space-between">
                    {" "}
                    Book a Demo{" "}
                    <Box ml="2">
                      <IoIosCall />
                    </Box>
                  </Flex>
                </a>
              </GradientButton>
            </div>
          </div>
        </div>

        <div className="community" data-aos="fade-up">
          <h1>Be a part of our awesome community!</h1>
          <ul className="socials">
            <li>
              <a href="https://twitter.com/intent/follow?screen_name=metapasshq">
                <Button>Twitter</Button>
              </a>
            </li>
            <li>
              <a href="https://discord.gg/7QDkBT39r8">
                <Button>Discord</Button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Main;
