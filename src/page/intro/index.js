
import { useMediaQuery } from 'react-responsive';

import styles from './intro.module.scss';
import INTRO_LIST from 'constants/introData.js';

function Intro() {
    const isMobile = useMediaQuery({ maxWidth: 768 })

    return (
        <main>
            <div className={styles.container}>                
                <div className={styles.title}>                      
                    <h1 className={styles.titleFont}>We are providing various ideas as a service🤩</h1>                    
                </div>

                <div className={styles.memberContainer}>
                    {
                        INTRO_LIST.map(item => {
                            return (                                
                                <div className={styles.memberContainer}>                    
                                    <div className={styles.memberWrapper}>
                                        {
                                            isMobile ?
                                                getIntroProfile(item)
                                                : (!isMobile && isLeftPosition(item.id) && getIntroProfile(item))                                      
                                        }
                                                                            
                                        <div className={styles.infoWrapper}>
                                            <div className={styles.infoTitle}>
                                                <h2>{item.introName}</h2>
                                                <h4>{item.devSide}</h4>
                                            </div>

                                            <div className={styles.infoContentWrapper}>
                                                <img className={styles.infoImage} src={require('assets/img/icon_intro_info.png')} alt="member-info"/> 
                                                <div className={styles.infoContent}>{item.introContent}</div>

                                                <img className={styles.infoImage} src={require('assets/img/icon_intro_stack.png')} alt="member-stack"/>     
                                                <div className={styles.stackWrapper}>
                                                    {
                                                        item.devStack.map(stack => {
                                                            return (
                                                                <div>
                                                                    <img src={stack.image} alt={stack.name}/>
                                                                </div>  
                                                            );
                                                        })
                                                    }                                                                                  
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            !isMobile && !isLeftPosition(item.id) && getIntroProfile(item)                                            
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>            
        </main>
    );  
}

function isLeftPosition(id) {
    return id % 2 === 0;
}

function getIntroProfile(map) {    
    return (
        <div className={styles.imageWrapper}>
            <div className={styles.hoverWrapper}>
                <div>
                    <figure className={styles.imageFront}>
                        <img src={map.introImage1} alt={`introImage1${map.id}`}/>                                                                
                    </figure>
                        
                    <figure className={styles.imageBack}>
                        <img src={map.introImage2} alt={`introImage2${map.id}`}/>                                                                
                        <figcaption>                                            
                            <p><a href={map.githubUrl} target="_blank" rel="noreferrer noopener">💻 Github</a></p>
                        </figcaption>                                                             
                    </figure> 
                </div>
            </div>                    
        </div>
    );
}

export default Intro;