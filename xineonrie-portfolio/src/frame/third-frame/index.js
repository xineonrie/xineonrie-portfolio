import React, { useEffect, useState, useRef } from 'react';

import styles from './styles.module.scss'
import AnimatedTitle from '../../components/AnimatedTitle';
import ProjectItems from '../../components/projectItems';
import {items} from './content.js'

function ThirdFrame(props) {
    const {isCurrent} = props;
    const [currentIndex, setCurrentIndex]=useState(0)
    const containerRef = useRef(null);
    const [canScroll, setCanScroll] = useState(true);

    useEffect(() => {
        const container = containerRef.current;

        const handleWheel = e =>{

            const direction = e.deltaY > 0 ? 'down' : 'up';
            const atTop = currentIndex === 0 && direction === 'up';
            const atBottom = currentIndex === items.length - 1 && direction === 'down';
      
            if (!atTop && !atBottom) {
              e.preventDefault(); 
            } else {
              return; 
            }

            if (!canScroll) return;
            setCanScroll(false); // 防抖
            setTimeout(() => setCanScroll(true), 800); // 切换节奏

            if (e.deltaY > 0) {
                setCurrentIndex(prev => Math.min(prev + 1, items.length - 1));
            } else {
                setCurrentIndex(prev => Math.max(prev - 1, 0));
            }
        }

        container.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
          container.removeEventListener('wheel', handleWheel);
        };
    }, [canScroll, items.length])

    return (
    <div className={styles.bg} ref={containerRef}>
       { isCurrent && (<div className={styles.title}>
            <AnimatedTitle text='PROJECTS' size='15vh'/>
        </div>)}
        <div className={styles['content-box']}>
            <ProjectItems content={items} index={currentIndex} />
        </div>

        {/* <div className={styles['box-content']}></div> */}
    </div>
    )
}

export default ThirdFrame;
