import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import INTRO_LIST from "constants/introData.js";
import Contact from "component/contact";
import AOS from "aos";

import "swiper/css";
import styles from "./intro.module.scss";

export default function Intro() {
  useEffect(() => {
    /// AOS 초기화
    AOS.init();
  }, []);

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
            {INTRO_LIST.map((el) => {
              return (
                <li
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  className={styles.memberInfo}
                >
                  <figure className={styles.memberImg}>
                    <img src={el.introImage} alt="멤버 아이콘" />
                  </figure>

                  <div className={styles.memberName}>
                    <h3>{el.introName}</h3>
                    <small>{el.devSide}</small>
                    <Link to={el.githubUrl}>GITHUB</Link>
                  </div>

                  <p>{el.introContent}</p>

                  <Swiper {...params} modules={[Autoplay]}>
                    {el.devStack.map((item, index) => (
                      <SwiperSlide className={styles.stackSlide}>
                        <figure>
                          <img
                            src={`/images/intro/icon_${item}.png`}
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
