import React, { useRef, useState } from "react";
import classNames from 'classnames';
import AnimatedTitle from '../AnimatedTitle'
import Poi from '../../assets/svg/poi'
import video1 from './videos/video1.mp4'
import img03 from './videos/001.png'

import styles from './styles.module.scss'
const cx = classNames;

const ProjectItems = (props) => {
    const {content, index} = props

    return (
        <div className={styles['project-wrapper']}>
            <div className={styles['video-box']}>
                <img className={styles['bg-img']} src={content[index].url} />
                {/* <video src={video1} className={styles['bg-video']} width='100%' height='100%' muted autoplay loop /> */}
            </div>
            <div className={styles['content-box']}>
                <div className={styles['indicator-box']}>
                    {content.map((item, i) => <div className={cx(styles['indicator-item'], (i === index) && styles['selected'])} />)}
                </div>
                <AnimatedTitle  key={`top-${index}`}  text={content[index].titleTop} size='5vh' />
                <div style={{marginTop:'-2vh'}} className={styles['title-border']}>
                    <AnimatedTitle key={`top-${index}`} text={content[index].titleSecond} size='5vh' />
                </div>
               {content[index].titleThird && <div style={{marginTop:'-2vh'}} className={styles['title-border']}>
                    <AnimatedTitle key={`top-${index}`} text={content[index].titleThird} size='5vh' />
                </div>}
                <div className={styles['divide-line']} style={{width:'90%',alignSelf:'flex-end'}}></div>
                
                <p>{content[index].time}</p>
                <div style={{fontWeight:'bold'}}>{(content[index].notes)?.map(item =>{
                    return (<span>· {item}   </span>)
                })}</div>
                 <div style={{fontWeight:'bold',marginTop:'1vh'}}>{(content[index].techs)?.map(item =>{
                    return (<span>· {item} </span>)
                })}</div>
                 <div className={styles['divide-line']}></div>
                 <p className={styles['inner-text']}>{content[index]['p1']}</p>
                 <p className={styles['inner-text']}>{content[index]['p2']}</p>
                 <p className={styles['inner-text']}>{content[index]['p3']}</p>
                 {content[index].link &&<a className={styles['click-box']} href={content[index].link}>CHECK IT OUT</a>}
            </div>
         
        </div>
    )
}

export default ProjectItems;
