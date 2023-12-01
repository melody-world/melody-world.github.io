import { Link } from "react-router-dom";
import BottomPopup from "component/popup/BottomPopup";
import PROJECT_LIST from "constants/projectData";
import Gravity from "./matter";

import styles from "./project.module.scss";

export default function Project() {
  return (
    <main>
      <BottomPopup content="💡 프로젝트를 탭하여 내용을 확인해 보세요." />

      {/* 캔버스 애니메이션 영역 */}
      <Gravity />

      {/* 프로젝트 리스트 영역 */}
      <section className={styles.projectPage}>
        <div className={styles.container}>
          <div className={styles.projectList}>
            {PROJECT_LIST.map((item) => {
              return (
                <Link
                  key={item.id}
                  className={styles.project}
                  to={item.readMore}
                  target="_blank"
                >
                  <div className={styles.projectImg}>
                    <img
                      src={item.projectMainImage}
                      alt="프로젝트 메인 이미지"
                    />
                  </div>

                  <div className={styles.projectInfo}>
                    <div className={styles.projectType}>
                      {item.projectType.map((type) => {
                        return <small>{type}</small>;
                      })}
                    </div>
                    <h5>{item.projectName}</h5>
                    <p>{item.projectContent}</p>
                    <div className={styles.projectDirect}>
                      {item.projectWebLink != null ? (
                        <a
                          href={item.projectWebLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Website
                        </a>
                      ) : (
                        ""
                      )}
                      {item.projectIosLink != null ? (
                        <a
                          href={item.projectIosLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Apple
                        </a>
                      ) : (
                        ""
                      )}
                      {item.projectAndLink != null ? (
                        <a
                          href={item.projectAndLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Android
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
