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
            <h2>'상상을 현실로'</h2>
            <p>
              우리의 프로젝트는 일상의 사소한 아이디어로부터 시작됩니다
              <br />
              사용자 중심의 인터페이스와 안정적인 기능을 더한 다양한 프로덕트를 소개합니다
              
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
