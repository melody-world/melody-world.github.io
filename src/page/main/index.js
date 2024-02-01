import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AOS from "aos";

import Contact from "component/contact";
import Loading from "component/loading";

import "swiper/css";
import styles from "./main.module.scss";

export const getProjectList = async () => {
  const data = await fetch("https://admin.codedream.co.kr/api/project", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  }).then((res) => res.json());

  if (data.message === "OK") {
    return data.resultList;
  }
};

export default function Main() {
  const { data, isLoading } = useQuery("project", getProjectList);

  useEffect(() => {
    /// AOS 초기화
    AOS.init();
  }, []);

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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <section className={styles.mainPage}>
        <div className={styles.container}>
          {/* 메인 타이틀 영역 */}
          <div className={styles.mainTitle}>
            <h2 data-aos="fade-up">'상상을 현실로'</h2>
            <p data-aos="fade-up" data-aos-delay="100">
              우리의 프로젝트는 일상의 사소한 아이디어로부터 시작됩니다
              <br />
              사용자 중심 인터페이스와 안정적인 기능을 더한 다양한 프로덕트를
              소개합니다
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className={styles.btnArea}
            >
              <a href="/project">프로젝트 전체보기</a>
              <a href="/intro">멤버소개</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* 메인 스와이퍼 영역 */}
        <Swiper {...params} modules={[Autoplay]}>
          {data &&
            data.map((item, index) => (
              <SwiperSlide key={index} className={styles.mainSlide}>
                <a href={item.readMore}>
                  <img src={item.projectMainImage} alt="프로젝트 메인 이미지" />
                  <div className={styles.projectInfo}>
                    <h3>{item.projectName}</h3>
                    <p>{item.projectContent} </p>
                    <span>{item.projectType}</span>
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
