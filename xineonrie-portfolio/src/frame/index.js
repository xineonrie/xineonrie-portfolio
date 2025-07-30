import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ReactFullpage from '@fullpage/react-fullpage';
import FirstFrame from './first-frame';
import SecondFrame from './second-frame';
import ThirdFrame from './third-frame';
import FourthFrame from './fourth-frame';
import styles from './styles.module.scss'

function Fullpage() {
  const [currentPage, setCurrentPage] = useState(1);


  return (
    <div className={styles.frame}>
      <div className={styles.section}>
        <FirstFrame />
      </div>
      <div className={styles.section}>
        <SecondFrame />
      </div>
      <div className={styles.section}>
        <ThirdFrame />
      </div>
      <div className={styles.section}>
        <FourthFrame />
      </div>
    </div>
  )
}


// const root = ReactDOM.createRoot(document.getElementById('react-root'));
// root.render(<Fullpage />);

export default Fullpage;
