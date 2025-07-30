import React, { useRef, useState } from "react";
import classNames from 'classnames';
import AnimatedTitle from '../AnimatedTitle'
import Poi from '../../assets/svg/poi'

import styles from './styles.module.scss'
const cx = classNames;

const PhotoItems = (props) => {
    const {gap, speed= 20, items, reverse= false} = props;
    const titleRef = useRef(null)
    const repeatedItems = [...items, ...items];
    const [ishover,setIshover] = useState(Array.from({length: repeatedItems.length}).fill(false));

    return (
        <div className={styles['photos-wrapper']}>
            <div className={styles[reverse ? 'photos-track-forward' : 'photos-track-backward']}>

            {repeatedItems.map((item,i) => 
                <div 
                    className={styles['item']} 
                    style={{marginTop: gap}}
                    onMouseEnter={() => {
                        let temp = Array.from({length: repeatedItems.length}).fill(false)
                        temp[i] = true
                        setIshover(temp)
                    }}
                    onMouseLeave={
                        () => {
                            let temp = Array.from({length: repeatedItems.length}).fill(false)
                            setIshover(temp)
                        }
                    }
                >
                      <img className={styles['img']} src={item.img} />
                    {
                        ishover[i] && 
                        (
                            <div className={styles['item-box']}>
                                <div className={styles['item-title']} >{item.time ||' '}</div>
                                <div className={styles['item-second']} ><Poi /> {item.poi ||' '}</div>
                                <div className={styles['item-sub']}>
                                    <p className={styles['item-third']}>{item.title}</p>
                                    <p className={styles['item-fourth']}>{item.description}</p>
                                </div>
                            </div>
                           
                        )
                    }
                </div>
            )}

            </div>
        </div>
    )
}

export default PhotoItems;
