import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import AOS from "aos";

import Gravity from "./matter";

import { getProjectList } from "page/main";
import styles from "./project.module.scss";

export default function Project() {
  const { data } = useQuery("project", getProjectList);

  useEffect(() => {
    /// AOS 초기화
    AOS.init();
  }, []);

  return (
    <main>
      {/* 캔버스 애니메이션 영역 */}
      <Gravity />

      {/* 프로젝트 리스트 영역 */}
      <section className={styles.projectPage}>
        <div className={styles.container}>
          <div className={styles.projectList}>
            {data &&
              data.map((item) => {
                return (
                  <Link
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    key={item.id}
                    className={styles.project}
                    to={item.readMore}
                    target="_blank"
                  >
                    <div className={styles.projectImg}>
                      <img
                        src={`https://s3.ap-northeast-2.amazonaws.com/cd.admin-bucket/${item.projectMainImage}`}
                        alt="프로젝트 메인 이미지"
                      />
                    </div>

                    <div className={styles.projectInfo}>
                      <div className={styles.projectType}>
                        <small>{item.projectType}</small>
                      </div>
                      <h5>{item.projectName}</h5>
                      <p>{item.projectContent}</p>
                      <div className={styles.projectDirect}>
                        {item.projectWebLink !== "" ? (
                          <a href={item.projectWebLink} target="blank">
                            Website
                          </a>
                        ) : (
                          ""
                        )}
                        {item.projectIosLink !== "" ? (
                          <a href={item.projectIosLink} target="blank">
                            iOS
                          </a>
                        ) : (
                          ""
                        )}
                        {item.projectAndLink !== "" ? (
                          <a href={item.projectAndLink} target="blank">
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
