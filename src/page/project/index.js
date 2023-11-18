import { useMediaQuery } from 'react-responsive';

import styles from './project.module.scss';
import PROJECT_LIST from 'constants/projectData';

function Project() {
    return (
        <main>
            <div className={styles.container}>                
                <section>
                    <div className={styles.introContainer}>
                        <div className={styles.introWrapper}>
                            <div className={styles.introText}>

                                <span className={styles.title}>프로젝트</span>
                                <span className={styles.subTitle}>                                                                    
                                    우리의 재밌는 상상을<br/>
                                    현실화한 프로젝트를 소개합니다
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className={styles.projectContainer}>
                        <ul className={styles.projectList}>
                            {
                                PROJECT_LIST.map(item => {
                                    const tagClassName = item.projectType === 'WEB' ? 
                                                        `${styles.projectTag} ${styles.tagWeb}` : 
                                                        `${styles.projectTag} ${styles.tagApp}`;

                                    return (
                                        <li className={styles.projectItem}>
                                            <div>
                                                <div className={styles.projectFront}>
                                                    <div className={styles.imageWrapper}>                                
                                                        <img src={require(`assets/img/project/${item.projectImage}`)} ></img>
                                                    </div>
                                                    <div className={styles.profileWrapper}>
                                                        <span className={tagClassName}>{item.projectType}</span>
                                                        <span className={styles.projectTitle}>{item.projectName}</span>                                                        
                                                    </div>
                                                </div>

                                                <div className={styles.projectBack}>                                
                                                    <div className={styles.imageWrapper}>           
                                                        {
                                                            item.projectWebLink !== '' &&
                                                                <a className={styles.store} href={item.projectWebLink} target="_blank" rel="noreferrer noopener">
                                                                    <img src={require('assets/img/project/icon_web.png')} ></img>Home
                                                                </a>                                                     
                                                        }                                          
                                                        {
                                                            item.projectIosLink !== '' &&
                                                                <a className={styles.store} href={item.projectIosLink} target="_blank" rel="noreferrer noopener">
                                                                    <img src={require('assets/img/project/icon_apple.png')} ></img>App Store
                                                                </a>                                                      
                                                        }
                                                        {
                                                            item.projectAndLink !== '' &&
                                                                <a className={styles.store} href={item.projectAndLink} target="_blank" rel="noreferrer noopener">
                                                                    <img src={require('assets/img/project/icon_google.png')} ></img>Google Play
                                                                </a>                                                     
                                                        }                                              
                                                    </div>
                                                    <div className={styles.profileWrapper}>
                                                        <span className={styles.projectTitle}>"{item.projectContent}"</span>
                                                        <p>
                                                            <a href={item.readMore} target="_blank" rel="noreferrer noopener"><span className={styles.moreBtn}>더보기</span></a>
                                                        </p>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </section>                
            </div>
        </main>
    );
}

export default Project;