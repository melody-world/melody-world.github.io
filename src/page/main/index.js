import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PROJECT_LIST from "constants/projectData";
import Contact from "component/contact";

import "swiper/css";
import styles from "./main.module.scss";

export default function Main() {
  const params = {
    spaceBetween: 10,
    slidesPerView: 1,
    centeredSlides: true,
    className: styles.mainSwiper,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        autoplay: true,
        slidesPerView: 2.25,
        spaceBetween: 8,
        centeredSlides: false,
      },
    },
  };

  return (
    <main>
      <section className={styles.mainPage}>
        <div className={styles.container}>
          {/* 메인 타이틀 영역 */}
          <div className={styles.mainTitle}>
            <h2>디자인 첫걸음</h2>
            <p>
              새로운 분야에 첫발을 내디딜 때 누구나 막연하게 두렵죠.
              <br />
              374개의 영상을 통해 디자인을 배워보세요.
            </p>
            <div className={styles.btnArea}>
              <a href="/project">프로젝트 전체보기</a>
              <a href="/intro">멤버소개</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* 메인 스와이퍼 영역 */}
        <Swiper {...params} modules={[Autoplay]}>
          {PROJECT_LIST.map((item, index) => (
            <SwiperSlide key={index} className={styles.mainSlide}>
              <a href={item.readMore}>
                <img src={item.projectMainImage} alt="프로젝트 메인 이미지" />
                <div className={styles.projectInfo}>
                  <h3>{item.projectName}</h3>
                  <p>{item.projectContent} </p>
                  {item.projectType.map((type, index) => {
                    return <span key={index}>{type}</span>;
                  })}
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 연락 영역 */}
      <Contact />
    </main>
  );
}
