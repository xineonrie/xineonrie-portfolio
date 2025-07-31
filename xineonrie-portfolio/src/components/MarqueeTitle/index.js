import React, { useRef } from "react";
import classNames from 'classnames';

import styles from './styles.module.scss'
const cx = classNames;

const MarqueeTitle = (props) => {
    const {title, gap='5vw', speed= 20} = props;
    const titleRef = useRef(null)
    return (
        <div className={styles['marquee-wrapper']}>
            <div className={styles['marquee-track']}
                style={{
                    animationDuration: `${speed}s`,
                }}
            >
            {Array.from({length:10}).map(item => 
                <span className={styles['item']} style={{marginRight: gap}}>{title}</span>
                )}
            </div>
        </div>
    )
}

export default MarqueeTitle;