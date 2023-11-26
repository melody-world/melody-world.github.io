import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PROJECT_LIST from "constants/projectData";

import "swiper/css";
import styles from "./main.module.scss";

export default function Main() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    console.log(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, [scrollPosition]);

  const params = {
    spaceBetween: 10,
    slidesPerView: 1.25,
    centeredSlides: true,
    className: styles.mainSwiper,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 1.5,
        spaceBetween: 30,
        centeredSlides: false,
      },
    },
  };

  return (
    <main>
      <div className={styles.mainPage}>
        <div className={styles.mainTitle}>
          <h2>
            이제껏 가장 막강한 <br />
            의료 생태계
            <br />
            어벤져스 탄생
          </h2>
          <a href="/project">프로젝트 구경하기</a>
        </div>

        <Swiper {...params} modules={[Autoplay]}>
          {PROJECT_LIST.map((item, index) => (
            <SwiperSlide key={index} className={styles.mainSlide}>
              <a href={item.readMore}>
                <div className={styles.projectImg}>
                  <img src={item.projectMainImage} alt="프로젝트 메인 이미지" />
                </div>
                <div className={styles.projectText}>
                  <div className={styles.bigLogo}>
                    <img src={item.projectLogo1} alt="프로젝트 로고" />
                  </div>
                  <div className={styles.smallLogo}>
                    <img src={item.projectLogo2} alt="프로젝트 모바일 로고" />
                  </div>
                  <span>{item.projectContent}</span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.contactPage}>
        <div
          className={`${styles.container} ${
            scrollPosition > (isMobile ? 30 : 200) ? styles.active : ""
          }`}
        >
          <h3>
            우리의 문은
            <br />
            항상 열려 있습니다.
          </h3>
          <p>
            '메리에디하우스'에게 궁금한게 있나요?
            <br />
            언제든지, 편하게 문의를 남겨주세요.
          </p>
          <a
            href="https://open.kakao.com/o/sPB3tYBf"
            target="_blank"
            rel="noreferrer"
          >
            서비스 문의하기
          </a>
        </div>
      </div>
    </main>
  );
}
