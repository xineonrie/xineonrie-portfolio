import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';
import LinkedInIcon from '../../assets/svg/LinkedInIcon';
import MailIcon from '../../assets/svg/mailIcon';
import Download from '../../assets/svg/Download';
import img1 from '../../assets/figures/star-shape-2.png';
import img2 from '../../assets/figures/star-shape.png';
import img3 from '../../assets/figures/up-arrow-shape.png';
import img4 from '../../assets/figures/triangle-shape.png';
import resume from './Nelly_Wang_Resume_Frontend_2025.pdf';

import classNames from 'classnames';

import AnimatedTitle from '../../components/AnimatedTitle';
import AnimatedItems from '../../components/AnimatedItems';
import ParallaxScene from '../../components/ParallaxScene';

const cx = classNames;


function FirstFrame(props) {
  const [animeH2, setAnimeH2] = useState(false)
  const imageList = [
    { src: img1, style: { top: '20vh', left: '-10vw' } },
    { src: img2, style: { top: '20vh', left: '70vw'} },
    { src: img3, style: { top: '50vh', left: '10vw'} },
    { src: img4, style: { top: '-20vh', left: '50vw'} },
  ];
    useEffect(() => {
    setTimeout(() => {
      setAnimeH2(true)
    }, 100);
  },[])

  return (
    <div className={styles.bg} >
        <div className={styles.header}>
          <div className={styles['left-part']}>
            <a href='https://www.linkedin.com/in/yuyan-wang-36a846281'><LinkedInIcon /></a>
            <a href='mailto:xineorie@gmail.com?subject=Contact'><MailIcon style={{marginLeft: '16px'}} /></a>
          </div>
          <div className={styles['right-part']}>
            <div onClick={() => {props.callFn(1)}}>About me</div>
            <div onClick={() => {props.callFn(2)}}>Projects</div>
            <div onClick={() => {props.callFn(3)}}>Contacts</div>
            <div ><a className={styles['download-btn']} href={resume} download={resume}>My Resume <Download style={{marginLeft: '6px'}} /></a> </div>
          </div>
        </div>
        <div className={styles.content}>
          <AnimatedTitle style={{marginTop: '64px'}} text='Hi, I’m Nelly Wang' />
          <div className={cx({[styles['fadein-animate']]: animeH2}, styles['h2-container'])}>
            <p className={styles.h2}>WEB DEVELOPER</p>
            <p className={styles.h2}>AND AN UI DESIGNER</p>
          </div>
        </div>
        <div className={cx({[styles['fadein-animate']]: animeH2}, styles['describe-text'])}>
          <p>Front-End Developer with 2+ years of experience in high-performance cross-platform app development at TikTok China. Skilled in React, TypeScript, and ECharts. </p>
          Thrive in fast-paced Agile teams, with a strong ability to quickly learn and apply new frameworks. Actively seeking opportunities to build scalable, intuitive UIs in growth-driven teams.
        </div>
        <div className={styles.scene}>
        <ParallaxScene>
          {imageList.map((img, i) => <AnimatedItems key={i} url={img.src} style={img.style}/>)} 
        </ParallaxScene>
        </div>

    </div>
  );
}

export default FirstFrame;