import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import ReactFullpage from '@fullpage/react-fullpage';
import FirstFrame from './first-frame';
import SecondFrame from './second-frame';
import ThirdFrame from './third-frame';
import FourthFrame from './fourth-frame';
import styles from './styles.module.scss'

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

  return (
    <div className={styles.frame} ref={containerRef} onScroll={handleScroll}>
      <div className={styles.section} ref={sectionRefs[0]}>
        <FirstFrame isCurrent={currentPage === 0} />
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
