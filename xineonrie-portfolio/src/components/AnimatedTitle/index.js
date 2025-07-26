import React from "react";
import styles from './styles.module.scss'

const AnimatedTitle = ({text}) => {
    return (
        <div className={styles.h1}>
            {text.split('').map((item,index) =>
                <span
                    key={index}
                    className={styles.char}
                    style={{animationDelay: `${index * 0.1}s`}}
                >
                    {item === ' ' ? '\u00A0' : item}
                </span>
            )}
        </div>
    )
}

export default AnimatedTitle;