import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';
import LinkedInIcon from '../../assets/svg/LinkedInIcon';
import MailIcon from '../../assets/svg/mailIcon';
import Download from '../../assets/svg/Download';
import img1 from '../../assets/figures/star-shape-2.png';
import img2 from '../../assets/figures/star-shape.png';
import img3 from '../../assets/figures/up-arrow-shape.png';
import img4 from '../../assets/figures/triangle-shape.png';

import classNames from 'classnames';

import AnimatedTitle from '../../components/AnimatedTitle';
import AnimatedItems from '../../components/AnimatedItems';
import ParallaxScene from '../../components/ParallaxScene';

const cx = classNames;


function SecondFrame() {


  return (
    <div className={styles.bg} >
        
        <div className={styles.content}>
            <div className={styles['left-part']}></div>
            <div className={styles['right-part']}> <AnimatedTitle style={{marginTop: '64px'}} text='ABOUT ME' /></div>

        </div>
       

    </div>
  );
}

export default SecondFrame;