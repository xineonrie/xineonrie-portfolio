import React, { useState, useEffect } from 'react';

import styles from './styles.module.scss';
import MarqueeTitle from '../../components/MarqueeTitle';
import AnimatedTitle from '../../components/AnimatedTitle';
import classNames from 'classnames';

import PhotoItems from '../../components/PhotoItems';
import img01 from './source/01.JPG';
import img02 from './source/02.JPG';
import img03 from './source/03.JPG';
import img04 from './source/04.JPG';
import img05 from './source/05.JPG';

const cx = classNames;

function SecondFrame() {
    const leftCol = [{
      img: img01,
      title: 'Where I worked',
      poi: 'China, Beijing',
      time:'2023',
      description:'dsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdssdsdssd'
    },{
      img: img03,
      title: 'Where I worked',
      poi: 'China, Beijing',
      time:'2021'
    },{
      img: img05,
      title: 'Where I worked',
      poi: 'China, Beijing',
      time:'2021'
    }]
    const rightCol = [{
      img: img02,
      title: 'Where I worked',
      poi: 'China, Beijing',
      time:'2023'
    },{
      img: img03,
      title: 'Where I worked',
      poi: 'China, Beijing',
      time:'2021'
    },{
      img: img04,
      title: 'Where I worked',
      poi: 'Australia, Adelaide',
      time:'2024'
    }]

  return (
    <div className={styles.bg} >
        
        <div className={styles.content}>
            <div className={styles['left-part']}>
              <div className={styles['left-roll']}>
                {/* {leftCol.map((item,i) => <div className={styles['roll-item']}></div>)} */}
                <PhotoItems items={leftCol} />
              </div>
              <div className={styles['right-roll']}>
                <PhotoItems items={rightCol} reverse={true} />
              </div>

            </div>
            <div className={styles['right-part']}> 
              <div className={styles['right-top']}> 
                <MarqueeTitle title='ABOUT ME' />
              </div>
              <div className={styles['right-content']}>
                 <AnimatedTitle text='PROFILE' size='4vh' />
                 <p className={styles['right-content-text']}>I’m Nelly Wang, a front-end developer with a strong background in cross-platform app development. After earning my bachelor’s degree in <b>Telecommunication Engineering in Beijing University of Posts and Telecommunications</b>, I spent two years at <b>TikTok China</b>, focusing on high-performance UI systems and low-code solutions. Currently, I’m completing my Master’s in <b>Computer Science</b> at the <b>University of Adelaide</b>, and I’m actively looking for opportunities to bring scalable and intuitive user experiences to life.</p>
                 <AnimatedTitle text='EDUCATION' size='4vh' />
                 <div className={styles['degree-container']}>
                   <div className={styles['sub-container']}>
                    <p><i>Adelaide, SA</i></p>
                    <p className={styles['degree-title']}><i>09/2017 - 06/2021</i></p>
                  </div>
                  <div>
                    <p className={styles['degree-first']}>University of Adelaide</p>
                    <p className={styles['degree-title']}> <b>Master of Science</b> <span className={styles['degree-border']}> · Computer Science</span>  </p>
                  </div>
                 </div>
                 <div className={styles['degree-container']} style={{marginTop:'-2vh'}}>
                   <div className={styles['sub-container']}>
                    <p><i>Beijing, China</i></p>
                    <p className={styles['degree-title']}><i>07/2023 - 07/2025</i></p>
                  </div>
                  <div>
                    <p className={styles['degree-first']}>Beijing University of Posts And Telecommunications</p>
                    <p className={styles['degree-title']}> <b>Bachelor of Science</b> <span className={styles['degree-border']}>· Telecommunication Engineering With Management</span></p>
                  </div>
                 </div>
              
                 <AnimatedTitle text='SKILLS' size='4vh' />
                 <div className={styles['right-bottom']}>
                    <div className={styles['skill-container']}>
                      <p className={styles['skill-title']}>FRAMEWORKS</p>
                      <p  className={styles['skill-text']}>React / React Native</p>
                    </div>
                    <div className={styles['skill-container']}>
                      <p className={styles['skill-title']}>WEB TECHNOLOGIES</p>
                      <p  className={styles['skill-text']}>TypeScript / JavaScript / HTML5 / CSS3</p>
                    </div>
                    <div className={styles['skill-container']}>
                      <p className={styles['skill-title']}>DATA VISUALIZATION</p>
                      <p  className={styles['skill-text']}>ECharts</p>
                    </div>
                    <div className={styles['skill-container']}>
                    <p className={styles['skill-title']}>TOOLING & DEVOPS</p>
                    <p  className={styles['skill-text']}>Git / CI/CD / Unit Testing</p>
                    </div>
                    <div className={styles['skill-container']}>
                    <p className={styles['skill-title']}>ENGINEERING PRACTICES</p>
                    <p  className={styles['skill-text']}>Agile / Performance Optimization</p>
                    </div>
                 </div>
              </div>

            </div>

        </div>
       

    </div>
  );
}

export default SecondFrame;