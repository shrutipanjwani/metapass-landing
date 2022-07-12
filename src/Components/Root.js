import React from 'react'
import "../App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Root() {
    return (
        <div className="App">
            <head>
                <meta
                    name="title"
                    content="Metapass | An on-chain ticketing solution."
                />
                <meta
                    name="description"
                    content="Metapass is an on-chain ticketing platform where event hosts can sell tickets in form of Non Fungible Tokens (NFTs)"
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metapasshq.xyz/" />
                <meta property="og:title" content="MetaPass | Reimagining Events" />
                <meta
                    property="og:description"
                    content="Book NFT tickets for online and IRL events"
                />
                <meta property="og:image" content="assets/embed.png"></meta>

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metapasshq.xyz/" />
                <meta
                    property="twitter:title"
                    content="MetaPass | Reimagining Events"
                />
                <meta
                    property="twitter:description"
                    content="Book NFT tickets for online and IRL events"
                />
                <meta property="twitter:image" content="assets/embed.png"></meta>
                <script async defer data-website-id="b3639a29-71de-454d-b6b4-59dfc3d5e5bf" src="https://analytics.metapasshq.xyz/umami.js"
                ></script>
            </head>
            <Navbar />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Root