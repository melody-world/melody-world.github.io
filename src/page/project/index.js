import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import styles from "./project.module.scss";
import BottomPopup from "component/popup/BottomPopup";
import PROJECT_LIST from "constants/projectData";

export default function Project() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [showBottomPopup, setShowBottomPopup] = useState(false);

  useEffect(() => {
    const showPopupAfterDelay = () => {
      setShowBottomPopup(true);
    };

    if (isMobile) {
      const timeoutId = setTimeout(showPopupAfterDelay, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isMobile]);

  function ProjectFront({ typeObj, item }) {
    return (
      <div className={styles.projectFront}>
        <div className={styles.imageWrapper}>
          <img src={require(`assets/img/project/${item.projectImage}`)} alt={item.id} />
        </div>
        <div className={styles.profileWrapper}>
          <p>{typeObj}</p>
          <p className={styles.projectTitle}>{item.projectName}</p>
        </div>
      </div>
    );
  }

  function ProjectBack({ item }) {
    return (
      <div className={styles.projectBack}>
        <div className={styles.imageWrapper}>
          <img src={require(`assets/img/project/${item.projectImage}`)} alt={item.id} />
        </div>
        <div className={styles.profileWrapper}>
          <p className={styles.projectTitle}>"{item.projectContent}"</p>
          <div>
            <a className={styles.moreBtn} href={item.readMore} target="_blank" rel="noreferrer noopener">
              더보기
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className={styles.container} id="root">
        {isMobile && showBottomPopup && <BottomPopup content="💡 탭하여 내용을 확인해보세요" />}

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
                    key={pType}
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
                  <li key={item.id} className={styles.projectItem}>
                    <div>
                      <ProjectFront typeObj={typeObj} item={item} key={`front-${item.id}`} />
                      <ProjectBack item={item} key={`back-${item.id}`} />
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
