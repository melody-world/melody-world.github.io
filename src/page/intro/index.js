import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import INTRO_LIST from "constants/introData.js";
import Contact from "component/contact";

import "swiper/css";
import styles from "./intro.module.scss";

export default function Intro() {
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
            디자인 툴 강의부터
            <br />
            디자인 이론과 코딩 지식까지
          </h2>

          <ul>
            {INTRO_LIST.map((el) => {
              return (
                <li className={styles.memberInfo}>
                  <Link to={el.githubUrl}>
                    <figure className={styles.memberImg}>
                      <img src={el.introImage} alt="멤버 아이콘" />
                    </figure>

                    <div className={styles.memberName}>
                      <h3>{el.introName}</h3>
                      <small>{el.devSide}</small>
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
                  </Link>
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
