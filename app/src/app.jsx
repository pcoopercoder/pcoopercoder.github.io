import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";
import Typewriter from "typewriter-effect";

/**
 * This code defines the react app
 *
 * Imports the router functionality to provide page navigation
 * Defines the Home function outlining the content on each page
 * Content specific to each page (Home and About) is defined in their components in /pages
 * Each page content is presented inside the overall structure defined here
 * The router attaches the page components to their paths
 */

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";

// The component that adds our Meta tags to the page
import Seo from "./components/seo.jsx";

import ScrollToTop from "./components/ScrollToTop.js";

// Home function that is reflected across the site
export default function Home() {
  return (
    <Router>
      <Seo />
      <div className="stickyNav">
        <div className="links">
          <a href="/">Home</a>
          <span className="divider">|</span>
          <a href="/kulosaari">Tech in the Education System</a>
          <span className="divider">|</span>
          <a href="/kaisenemi">Tech in Everyday Life</a>
          <span className="divider">|</span>
          <a href="/about">The Team</a>
        </div>
      </div>
      <main role="main" className="wrapper">
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
          <PageRouter />
        </div>
      </main>
      {/* Footer links to Home and About, Link elements matched in router.jsx */}
      <footer className="footer">
        <div id="moominFooterGroup">
          <img
            id="moominFooter"
            src="https://cdn.glitch.global/fb75668c-7d6a-4335-873e-c191019df87e/ezgif-4-37afcb53c0.webp?v=1688347480683"
            alt=""
          />
          <p>Gif source: Line Stickers</p>
        </div>
        <p id="credits">
          Unless specified otherwise, all photos and art are by Portia Cooper.
          This site contains boilerplate React.js code by Glitch. All other
          HTML, CSS, and JavaScript was written by Portia Cooper.
        </p>

        <a
          className="btn--remix"
          target="_top"
          href="https://glitch.com/edit/#!/remix/glitch-hello-react"
        >
          <img
            src="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140"
            alt=""
          />
          Remix on Glitch
        </a>
      </footer>
    </Router>
  );
}
