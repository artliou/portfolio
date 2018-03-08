import React, { Component } from 'react';
import { render } from "react-dom";
import Link from 'gatsby-link';

import Carousel from '../components/slideshow.js';
import "./carousel.min.css"; //Need this, but CSS is off

const Home = (props) => (
  <div>
    <h1>Welcome!</h1>
    <p>Website Design & Code is Currently Tailored for The Basic Requirements of OSU 290 Project</p>
    <h3>Expect a lot of UI & UX changes to come.</h3>

    <Carousel />

  </div>
)

export default Home;
