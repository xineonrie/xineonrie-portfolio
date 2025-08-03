import styles from './styles.module.scss'
import AnimatedTitle from '../../components/AnimatedTitle';
import MarqueeTitle from '../../components/MarqueeTitle';
import LinkedInIcon from '../../assets/svg/LinkedInIcon';
import MailIcon from '../../assets/svg/mailIcon';
import Github from '../../assets/svg/github';

function FourthFrame(props) {
    const {isCurrent} = props;

    return (
    <div className={styles.bg}>
        {isCurrent && <div className={styles.display} >
              <AnimatedTitle className={styles.title} text='WHAT OTHERS SAY'/>
        <div className={styles.innerText}>
            <p className={styles['left-quote']}>"</p>
            <div className={styles['inner-class']}>
                <p><i>Nelly possesses extensive knowledge and experience in front-end development. She is proficient in a wide range of technologies, including HTML5, CSS3, JavaScript (ES6+), and React. She has a deep understanding of web performance optimization, stability monitoring, cross-platform development, user experience, and accessibility.</i></p>
                <p><i>In addition, Nelly demonstrates strong teamwork and communication skills. She collaborates effectively with cross-functional team members such as designers, back-end engineers, and product managers to ensure smooth project execution.</i></p>
            </div>
             <p className={styles['right-quote']}>"</p>
            <p className={styles['inner-name']}>Dachi Xu</p>
            <p className={styles['inner-title']}>Lead Front-End Engineer - Bytedance</p>
        </div> 
            <div className={styles['contact-container']}>
                
                <a href='https://www.linkedin.com/in/yuyan-wang-36a846281'><LinkedInIcon /></a>
                <a href='mailto:xineorie@gmail.com?subject=Contact'><MailIcon width={30} height={30} /></a>
                <a href='https://github.com/xineonrie'><Github /></a>
                
            </div>
        <div className={styles['bottom-class']}>
           
            <MarqueeTitle title='PLEASE CONTACT ME !' />
        </div>
            </div>}
      
    </div>
    )
}

export default FourthFrame;
