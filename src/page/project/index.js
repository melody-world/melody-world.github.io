import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import styles from "./project.module.scss";
import PROJECT_LIST from "constants/projectData";

function Project() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const AutoHideModal = ({ isVisible, onClose, delay = 3000 }) => {
    useEffect(() => {
      let timeoutId;

      if (isVisible) {
        timeoutId = setTimeout(() => {
          onClose();
        }, delay);
      }

      return () => {
        clearTimeout(timeoutId);
      };
    }, [isVisible, onClose, delay]);

    return (
      <div className={`${styles.modal} ${isVisible ? styles.visible : styles.hidden}`}>
        <p>💡 탭하여 내용을 확인해보세요</p>
      </div>
    );
  };

  const [modalVisible, setModalVisible] = useState(true);
  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setModalVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main>
      <div className={styles.container}>
        {isMobile && (
          <div>
            <AutoHideModal isVisible={modalVisible} onClose={closeModal} />
          </div>
        )}
        <section>
          <div className={styles.introContainer}>
            <div className={styles.introWrapper}>
              <div className={styles.introText}>
                <span className={styles.title}>프로젝트</span>
                <span className={styles.subTitle}>
                  우리의 재밌는 상상을
                  <br />
                  현실화한 프로젝트를 소개합니다
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.projectContainer}>
            <ul className={styles.projectList}>
              {PROJECT_LIST.sort((a, b) => {
                return b.id - a.id;
              }).map((item) => {
                const typeObj = item.projectType.map((pType) => (
                  <span
                    className={
                      pType === "WEB"
                        ? `${styles.projectTag} ${styles.tagWeb}`
                        : `${styles.projectTag} ${styles.tagApp}`
                    }
                  >
                    {pType}
                  </span>
                ));

                return (
                  <li className={styles.projectItem}>
                    <div>
                      <div className={styles.projectFront}>
                        <div className={styles.imageWrapper}>
                          <img src={require(`assets/img/project/${item.projectImage}`)} />
                        </div>
                        <div className={styles.profileWrapper}>
                          <p>{typeObj}</p>
                          <p className={styles.projectTitle}>{item.projectName}</p>
                        </div>
                      </div>

                      <div className={styles.projectBack}>
                        <div className={styles.imageWrapper}>
                          <img src={require(`assets/img/project/${item.projectImage}`)} />
                        </div>
                        <div className={styles.profileWrapper}>
                          <p className={styles.projectTitle}>"{item.projectContent}"</p>
                          <p>
                            <a href={item.readMore} target="_blank" rel="noreferrer noopener">
                              <span className={styles.moreBtn}>더보기</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Project;
