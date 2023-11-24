import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PROJECT_LIST from "constants/projectData";

import "swiper/css";
import styles from "./main.module.scss";

export default function Main() {
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
                  <img
                    src={item.projectMainImage}
                    alt="프로젝트 메인 이미지"
                  ></img>
                </div>
                <div className={styles.projectText}>
                  <div className={styles.projectLogo}>
                    <img src="" alt="프로젝트 로고"></img>
                  </div>
                  <span>{item.projectContent}</span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
