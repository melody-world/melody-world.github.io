import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import Contact from "component/contact";
import AOS from "aos";

import Loading from "component/loading";
import "swiper/css";
import styles from "./intro.module.scss";

export default function Intro() {
  const [introList, setIntroList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const data = await fetch("/api/members", {
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      if (data.message === "OK") {
        setIsLoading(false);
        return setIntroList(data.resultList);
      }
    }

    /// AOS 초기화
    AOS.init();

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const params = {
    spaceBetween: 8,
    slidesPerView: "auto",
    className: styles.stackSwiper,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  };

  return (
    <main>
      {/* 멤버 소개 영역 */}
      <section className={styles.memberPage}>
        <div className={styles.container}>
          <h2>
            기획부터 디자인,
            <br />
            개발부터 런칭까지
          </h2>

          <ul>
            {introList &&
              introList.map((el, index) => {
                return (
                  <li
                    key={index}
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    className={styles.memberInfo}
                  >
                    <figure className={styles.memberImg}>
                      <img src={el.userImage} alt="멤버 아이콘" />
                    </figure>

                    <div className={styles.memberName}>
                      <h3>{el.introName}</h3>
                      <small>{el.devSide}</small>
                      {el.githubUrl && <Link to={el.githubUrl}>GITHUB</Link>}
                    </div>

                    <p>{el.introContent}</p>

                    <Swiper {...params} modules={[Autoplay]}>
                      {el.devStack.split("/").map((item, index) => (
                        <SwiperSlide key={index} className={styles.stackSlide}>
                          <figure>
                            <img
                              src={`https://cdn.simpleicons.org/${item}`}
                              alt="기술스택 아이콘"
                            />
                          </figure>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>

      {/* 연락 영역 */}
      <Contact />
    </main>
  );
}
