
import styles from './intro.module.scss';

import Logo from 'assets/svg/spring.svg';

function Intro() {
    return (
        <main>
            <div className={styles.container}>                
                <div className={styles.title}>                      
                    <h1 className={styles.titleFont}>We are providing various ideas as a service🤩</h1>                    
                </div>

                <div className={styles.memberContainer}>                    
                    <div className={styles.memberWrapper}>
                        <div className={styles.imageWrapper}>
                            <img className={styles.imageBox} src="/images/intro/eddy.png"/>                        
                        </div>

                        <div className={styles.infoWrapper}>
                            <div className={styles.infoTitle}>
                                <h2>Merry</h2>
                                <h4>Front-end</h4>
                            </div>

                            <div className={styles.infoContentWrapper}>
                                <img className={styles.infoImage} src="/images/intro/member-info.png"/> 
                                <div className={styles.infoContent}>
                                    Hello world
                                </div>

                                <img className={styles.infoImage} src="/images/intro/member-stack.png"/>     
                                <div className={styles.infoContent}>
                                    Hello world
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.memberWrapper}>
                        
                        <div className={styles.infoWrapper}>
                            <div className={styles.infoTitle}>
                                <h2>Eddy</h2>
                                <h4>Back-end</h4>
                            </div>

                            <div className={styles.infoContentWrapper}>
                                <img className={styles.infoImage} src="/images/intro/member-info.png"/>     
                                <div className={styles.infoContent}>
                                    Hello world
                                </div>

                                <img className={styles.infoImage} src="/images/intro/member-stack.png"/>                                     
                                <div className={styles.stackWrapper}>
                                    <div>
                                        1
                                    </div>                                    
                                    <div>
                                        <img src={Logo} alt="화살표아이콘"/>
                                    </div>                                    
                                    <div>
                                        3
                                    </div>                                    
                                    <div>
                                        4
                                    </div>                                    
                                    <div>
                                        5
                                    </div>                                    
                                </div>                                                                          
                            </div>
                        </div>     

                        <div className={styles.imageWrapper}>
                            <img className={styles.imageBox} src="/images/intro/eddy.png"/>                        
                        </div>                   
                    </div>
                </div>
            </div>            
        </main>
    );  
}

export default Intro;