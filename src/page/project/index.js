import { Link } from "react-router-dom";
import { useState } from "react";
import BottomPopup from "component/popup/BottomPopup";
import PROJECT_LIST from "constants/projectData";

import styles from "./project.module.scss";

export default function Project() {
  const PROJECT_FILTER = ["전체", "WEB", "APP"];
  const [proList, setProList] = useState(PROJECT_LIST);
  const [filter, setFilter] = useState("전체");

  const handlerFilter = (e) => {
    const result = PROJECT_LIST.filter((ele) => {
      return ele.projectType.includes(e.currentTarget.innerText);
    });

    setFilter(e.currentTarget.innerText);
    setProList(result);
  };

  return (
    <main>
      <div className={styles.container}>
        <BottomPopup content="💡 프로젝트를 탭하여 내용을 확인해 보세요." />

        <h3>🎲 재미있는 상상을 현실로</h3>

        <section className={styles.projectPage}>
          <ul>
            {PROJECT_FILTER.map((ele) => {
              return (
                <li
                  className={`${filter === ele ? `${styles.active}` : ""}`}
                  onClick={(e) => handlerFilter(e)}
                >
                  {ele}
                </li>
              );
            })}
          </ul>

          <div className={styles.projectList}>
            {proList.map((item) => {
              return (
                <Link
                  key={item.id}
                  className={styles.projectContent}
                  to={item.readMore}
                  target="_blank"
                >
                  <img src={item.projectMainImage} alt="프로젝트 메인 이미지" />

                  <div className={styles.projectDetail}>
                    <div className={styles.projectTitle}>
                      <h5>{item.projectName}</h5>

                      <p>
                        {item.projectType.map((type) => {
                          return <small>{type}</small>;
                        })}
                      </p>
                    </div>

                    <span>{item.projectContent}</span>

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
        </section>
      </div>
    </main>
  );
}
