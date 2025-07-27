import React, { useRef } from "react";
import classNames from 'classnames';

import styles from './styles.module.scss'
const cx = classNames;

const AnimatedItems = (props) => {
    const {url, style, offset = { x: 0, y: 0 }} = props
    const imgRef = useRef(null)

    const transformX = offset.x * 30; // max 20deg rotation
    const transformY = offset.y * 30;

    const handleMouseMove = e => {
        const {width, height, left, top} = imgRef?.current?.getBoundingClientRect()

        const x = (e.clientX - left - width / 2) / width
        const y = (e.clientY - top - height / 2) / height

        const rotateX = y*30
        const rotateY = -x*30

        imgRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
    }

    const reset = e => {
        imgRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    }
    return (
        <div 
            className={cx(styles.h1, styles.wrapper)} 
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            style={{
                ...style,
                transform: `rotateY(${-transformX}deg) rotateX(${transformY}deg) scale(1.05)`,
                transition: "transform 0.1s ease-out",
            }} 
        >
            <img 
                src={url} 
                ref={imgRef}
                className={styles.img}  
            />
        </div>
    )
}

export default AnimatedItems;