import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';
import LinkedInIcon from '../../assets/svg/LinkedInIcon';
import MailIcon from '../../assets/svg/mailIcon';
import img1 from '../../assets/figures/star-shape-2.png';
import img2 from '../../assets/figures/star-shape.png';
import img3 from '../../assets/figures/up-arrow-shape.png';
import img4 from '../../assets/figures/triangle-shape.png';

import classNames from 'classnames';

import AnimatedTitle from '../../components/AnimatedTitle';
import AnimatedItems from '../../components/AnimatedItems';

const cx = classNames;


function FirstFrame() {
  const [animeH2, setAnimeH2] = useState(false)
  const imageList = [
    { src: img1, style: { top: '0%', left: '0%' } },
    { src: img2, style: { top: '40%', left: '80%'} },
    { src: img3, style: { bottom: '-20%', left: '10%'} },
    { src: img4, style: { top: '-20%', right: '10%'} },
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
            <LinkedInIcon />
            <MailIcon style={{marginLeft: '16px'}} />
          </div>
          <div className={styles['right-part']}>
            <div>About me</div>
            <div>Projects</div>
            <div>Contacts</div>
            <div>Get my CV</div>
          </div>
        </div>
        <div className={styles.content}>
          <AnimatedTitle style={{marginTop: '64px'}} text='Hi, I’m Nelly Wang' />
          <div className={cx({[styles['fadein-animate']]: animeH2}, styles['h2-container'])}>
            <p className={styles.h2}>WEB DEVELOPER</p>
            <p className={styles.h2}>UI DESIGNER</p>
            <p className={styles.h2} style={{marginTop:'20px'}}>AND AN ILLUSTRATOR.</p>
          </div>
        </div>
        <div className={styles['describe-text']}>
          <p>Front-End Developer with 2+ years of experience in high-performance cross-platform app development at TikTok China. Skilled in React, TypeScript, and ECharts. </p>
          Thrive in fast-paced Agile teams, with a strong ability to quickly learn and apply new frameworks. Actively seeking opportunities to build scalable, intuitive UIs in growth-driven teams.
        </div>
        <div className={styles.scene}>
          {imageList.map((img, i) => <AnimatedItems key={i} url={img.src} style={img.style}/>)}
        </div>
    </div>
  );
}

export default FirstFrame;