import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Carousel from './Carousel';

ReactDOM.render(
  <div style={{width:'80%', height:'100vh', display:'flex', alignItems:'center', margin:'auto'}}>
    <Carousel duration={'0.5s'} waitTime={'2.5s'}>
      <img src={require('./assets/img1.jfif').default} alt="content1" />
      <video src={require('./assets/video1.mp4').default } alt="content2" controls></video>
      <img src={require('./assets/img2.jpg').default} alt="content3" />
      <img src={require('./assets/img3.jfif').default} alt="content4" />
      <video src={require('./assets/video2.mp4').default } alt="content5" controls></video>
    </Carousel>
  </div>,
  document.getElementById('root')
);

reportWebVitals();
