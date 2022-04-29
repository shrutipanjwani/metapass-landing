import React, { useRef } from "react";
import "../Styles/Main.css";
import GradientButton from "./GradientButton";
import Button from "./Button";
import { Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faQrcode } from "@fortawesome/free-solid-svg-icons";
// import {} from "@fortawesome/fontawesome-svg-core"
import token from "../Assets/gate.m4v";
import live from "../Assets/Surf2.mp4";
import ticket from "../Assets/ticket1.png";
import TwitterFeed from "./TwitterFeed";
import { Flex } from "@chakra-ui/react";
// import { ReactComponent as ChartIcon } from "./chart-svgrepo-com.svg";

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
            We're live on Polygon with Solana integration coming soo, this means
            that buy and selling tickets will be fast and inexpensive.
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
          <div className="hear-com">Hear from our community</div>
        </div>
        <TwitterFeed />
        <div className="pricing" data-aos="fade-up">
          <h1>Pricing</h1>
          <p>There's something for everyone</p>
          <br />
          <div className="pricing-section">
            <div className="pricing-box">
              <h1>Indie</h1>
              <div className="price-flex">
                <span className="on-each-ticket">on each ticket</span>
                <br />
                <span>0% convenience fee</span>
              </div>
              <ul>
                <li>Make Unlimited events</li>
                <li>No limit on tickets</li>
                <li>Only for free events</li>
              </ul>
              <GradientButton>
                <a
                  href="
                mailto:gm@metapasshq.xyz
                "
                >
                  Let's Talk&nbsp; <FontAwesomeIcon icon={faArrowRight} />{" "}
                </a>
              </GradientButton>
            </div>
            <div className="pricing-box">
              <h1>Studio</h1>
              <div className="price-flex">
                <span className="on-each-ticket">on each ticket</span>
                <br />
                <span>10% convenience fee</span>
              </div>
              <ul>
                <li>Make Unlimited events</li>
                <li>Unlimited tickets</li>
                <li>Get paid for your tickets</li>
              </ul>
              <GradientButton>
                <a href="mailto:gm@metapasshq.xyz">
                  Let's Talk&nbsp; <FontAwesomeIcon icon={faArrowRight} />{" "}
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
