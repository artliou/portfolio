import React, { Component } from 'react';
import { render } from "react-dom";
import Link from 'gatsby-link';

import Carousel from '../components/slideshow.js';
import "./carousel.min.css"; //Need this, but CSS is off

const Home = (props) => (
  <div>
    <h1>Welcome!</h1>

    <div style={{
      height: 200,
      width: 200,
      borderWidth: 1,
      solid: "#ccc",
      overflow: 'scroll'
    }}>
      <p>Website Design & code is currently tailored for the basicreqs of OSU 290 Project, so the layout and format is sub-optimal</p>
      <h3>Expect a lot of UI & UX changes to come.</h3>
    </div>

    <Carousel />

  </div>
)

export default Home;
