import styles from './styles.module.scss'
import AnimatedTitle from '../../components/AnimatedTitle';
import ProjectItems from '../../components/projectItems';

function ThirdFrame() {
    return (
    <div className={styles.bg}>
        <div className={styles.title}>
            <AnimatedTitle text='PROJECTS' size='15vh'/>
        </div>
        <div className={styles['content-box']}>
            <ProjectItems />
        </div>

        {/* <div className={styles['box-content']}></div> */}
    </div>
    )
}

export default ThirdFrame;
