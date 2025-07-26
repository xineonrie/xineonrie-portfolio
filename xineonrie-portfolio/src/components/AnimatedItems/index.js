import React from "react";
import classNames from 'classnames';

import styles from './styles.module.scss'
const cx = classNames;

const AnimatedItems = (props) => {
    const {url, style} = props
    console.log('?????',style)
    return (
        <div className={cx(styles.h1, styles.wrapper)} style={style}>
            <img src={url} className={styles.img} />
        </div>
    )
}

export default AnimatedItems;