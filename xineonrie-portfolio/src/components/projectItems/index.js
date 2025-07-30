import React, { useRef, useState } from "react";
import classNames from 'classnames';
import AnimatedTitle from '../AnimatedTitle'
import Poi from '../../assets/svg/poi'
import video1 from './videos/video1.mp4'
import img03 from './videos/01.JPG'

import styles from './styles.module.scss'
const cx = classNames;

const ProjectItems = (props) => {

    const notes = ['official website','Creative Front-End', 'SEO', 'Responsive Layout']
    const tech = ['fullpage scroll','Parallax Scrolling','Performance optimization']

    return (
        <div className={styles['project-wrapper']}>
            <div className={styles['video-box']}>
                <img className={styles['bg-img']} src={img03} />
                <video src={video1} className={styles['bg-video']} width='100%' height='100%' muted autoplay loop />
            </div>
            <div className={styles['content-box']}>
                <AnimatedTitle text='TIKTOK CHINA' size='5vh' />
                <div style={{marginTop:'-2vh'}} className={styles['title-border']}>
                    <AnimatedTitle text='OFFICIAL WEBSITE' size='5vh' />
                </div>
                <div className={styles['divide-line']}></div>
                
                <p>2020.9-2020.12</p>
                <div style={{fontWeight:'bold'}}>{notes.map(item =>{
                    return (<span>· {item}   </span>)
                })}</div>
                 <div style={{fontWeight:'bold',marginTop:'1vh'}}>{tech.map(item =>{
                    return (<span>· {item} </span>)
                })}</div>
                 <div className={styles['divide-line']}></div>
                 <p></p>
            </div>
        </div>
    )
}

export default ProjectItems;
