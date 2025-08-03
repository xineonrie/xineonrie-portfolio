import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import ReactFullpage from '@fullpage/react-fullpage';
import FirstFrame from './first-frame';
import SecondFrame from './second-frame';
import ThirdFrame from './third-frame';
import FourthFrame from './fourth-frame';
import styles from './styles.module.scss'
import ArrowBarUp from '../assets/svg/arrowBarUp';
import classNames from 'classnames';
const cx = classNames;

function Fullpage() {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef(null)
  const sectionRefs = useRef([])

  const handleScroll = () =>{
    const scrollTop = containerRef.current.scrollTop;
    const containerHeight = containerRef.current.clientHeight;
    const calcuPage = Math.round(scrollTop / containerHeight)

    console.log(calcuPage)
    if(currentPage !== calcuPage) {
      setCurrentPage(calcuPage)
    }
  }

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  const scrollToProjects = (item) =>{
    if (containerRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      containerRef.current.scrollTo({ top: item*containerHeight, behavior: 'smooth' });
    }
  }

  return (
    <div className={styles.frame} ref={containerRef} onScroll={handleScroll}>
      {currentPage !==0 &&<div onClick={scrollToTop} className={cx(currentPage !==3 ? styles['top-button'] :  styles['top-button-white'])}><ArrowBarUp width={'3vh'} height={'3vh'} /></div>}
      <div className={styles.section} ref={sectionRefs[0]}>
        <FirstFrame isCurrent={currentPage === 0} callFn={scrollToProjects} />
      </div>
      <div className={styles.section} ref={sectionRefs[1]}>
        <SecondFrame isCurrent={currentPage === 1} />
      </div>
      <div className={styles.section} ref={sectionRefs[2]}>
        <ThirdFrame  isCurrent={currentPage === 2} />
      </div>
      <div className={styles.section} ref={sectionRefs[3]}>
        <FourthFrame isCurrent={currentPage === 3} />
      </div>
    </div>
  )
}


// const root = ReactDOM.createRoot(document.getElementById('react-root'));
// root.render(<Fullpage />);

export default Fullpage;
