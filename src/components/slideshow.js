import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

const SlideShow = () => (
  <Carousel autoPlay style={{ maxHeight: '300px', maxWidth: '300px' }}>

    <div>
      <img src="https://scontent-sjc3-1.cdninstagram.com/vp/e3b856beead19fdde80c683f4a2224d5/5B412B4C/t51.2885-15/sh0.08/e35/p640x640/23967026_1993310287549214_6549050039421894656_n.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="https://scontent-sjc3-1.cdninstagram.com/vp/81159d5df4ca948a504a21cb5ce040f6/5B344CF3/t51.2885-15/s640x640/sh0.08/e35/23098615_1953817901532854_6725778971465613312_n.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="https://scontent-sjc3-1.cdninstagram.com/vp/7ec2a59ff545a32b83e8b4d170664881/5B28698C/t51.2885-15/e15/11203480_700606806733476_1734887664_n.jpg" />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
)

export default SlideShow;