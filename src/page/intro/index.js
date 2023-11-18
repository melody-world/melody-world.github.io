
import styles from './intro.module.scss';

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
                            <div className={styles.hoverWrapper}>
                                <div>
                                    <figure className={styles.imageFront}>
                                        <img src="/images/intro/eddy.png" alt="eddy"/>                                                                
                                    </figure>
                                        
                                    <figure className={styles.imageBack}>
                                        <img src="/images/intro/eddy_work.png" alt="eddy-work"/>                        
                                        <figcaption>                                            
                                            <p>💻 Github</p>
                                        </figcaption>                                                             
                                    </figure> 
                                </div>
                            </div>                    
                        </div>

                        <div className={styles.infoWrapper}>
                            <div className={styles.infoTitle}>
                                <h2>Merry</h2>
                                <h4>Front-end</h4>
                            </div>

                            <div className={styles.infoContentWrapper}>
                                <img className={styles.infoImage} src="/images/intro/member-info.png" alt="member-info"/> 
                                <div className={styles.infoContent}>
                                    Hello world
                                </div>

                                <img className={styles.infoImage} src="/images/intro/member-stack.png" alt="member-stack"/>     
                                <div className={styles.stackWrapper}>
                                    <div>
                                        <img src="/images/intro/icon_java.png" alt="java"/>
                                    </div>                                    
                                    <div>
                                        <img src="/images/intro/icon_spring.png" alt="spring"/>
                                    </div>                                    
                                    <div>
                                        <img src="/images/intro/icon_database.png" alt="database"/>
                                    </div>                                    
                                    <div>
                                        <img src="/images/intro/icon_flutter.png" alt="flutter"/>
                                    </div>                                    
                                    <div>
                                        <img src="/images/intro/icon_aws.png" alt="aws"/>
                                    </div>                                    
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
                                <img className={styles.infoImage} src="/images/intro/member-info.png" alt="member-info"/> 
                                <div className={styles.infoContent}>
                                    Hello world
                                </div>

                                <img className={styles.infoImage} src="/images/intro/member-stack.png" alt="member-stack"/>     
                                <div className={styles.stackWrapper}>
                                    <div>
                                        <img src="/images/intro/icon_java.png" alt="java"/>
                                    </div>                                    
                                    <div>
                                        <img src="/images/intro/icon_spring.png" alt="spring"/>
                                    </div>                                    
                                    <div>
                                        <img src="/images/intro/icon_database.png" alt="database"/>
                                    </div>                                    
                                    <div>
                                        <img src="/images/intro/icon_flutter.png" alt="flutter"/>
                                    </div>                                    
                                    <div>
                                        <img src="/images/intro/icon_aws.png" alt="aws"/>
                                    </div>                                    
                                </div>
                            </div>
                        </div>

                        <div className={styles.imageWrapper}>
                            <div className={styles.hoverWrapper}>
                                <div>
                                    <figure className={styles.imageFront}>
                                        <img src="/images/intro/eddy.png" alt="eddy"/>                                           
                                    </figure>
                                        
                                    <figure className={styles.imageBack}>
                                        <img src="/images/intro/eddy_work.png" alt="eddy-work"/>                        
                                        <figcaption>                                            
                                            <p>
                                                <a href="https://github.com/eeesnghyun" target="_blank">💻 Github</a>
                                            </p>
                                        </figcaption>                                                             
                                    </figure> 
                                </div>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>            
        </main>
    );  
}

export default Intro;