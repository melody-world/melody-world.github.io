import React, { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";

import styles from "./gwangmyeong.module.scss";

import screenshot1 from "assets/img/Img_screenshot1.png";
import screenshot2 from "assets/img/Img_screenshot2.png";
import screenshot3 from "assets/img/Img_screenshot3.png";
import screenshot4 from "assets/img/Img_screenshot4.png";
import screenshot5 from "assets/img/Img_screenshot5.png";

import IconApp from "assets/img/Img_appIcon.png";
import IconArrowDown from "assets/img/Icon_arrowDown.png";
import IconApple from "assets/img/Icon_apple.png";
import IconGoogle from "assets/img/Icon_google.png";
import IconArrow from "assets/svg/arrow.svg";

const Gwangmyeong = () => {
  const subRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [scrollPosition, setScrollPosition] = useState(0);

  /// scroll 이벤트
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  /// scroll 이벤트
  const handleScroll = () => {
    window.scrollTo({ top: subRef.current.offsetTop + 48, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);

    /// AOS 초기화
    AOS.init();
  }, [scrollPosition]);

  return (
    <main>
      <section className={styles.mainPage}>
        <div className={styles.mainBackground}>
          <div className={styles.backRound}></div>
        </div>

        <div className={styles.container}>
          <div className={styles.mainWrap}>
            <div className={styles.mainTitle}>
              <h2>
                광명
                <br />
                찾자
              </h2>

              <p>우리동네</p>
              <p className={styles.lineText}>
                <span>모</span>
                <hr />
                <span>든</span>
              </p>
              <p>부동산 거래</p>
            </div>

            <div className={styles.mockupWrap}>
              <div className={styles.img_mockupMid}>
                <img src={screenshot2} alt="목업이미지" />
              </div>
              <div className={styles.img_appIcon}>
                <img src={IconApp} alt="어플아이콘" />
              </div>
            </div>

            {isMobile ? (
              <button
                type="button"
                className={styles.icon_moveArrow}
                onClick={handleScroll}
              >
                <img src={IconArrow} alt="화살표아이콘" />
              </button>
            ) : (
              ""
            )}
          </div>

          <div className={styles.subWrap} ref={subRef}>
            <div className={styles.subTitle}>
              <span>
                국토교통부에 신고된
                <br />
                광명시의 아파트 실거래 자료를 제공합니다.
              </span>

              <div className={styles.subRound}>
                <p>정확성</p>
                <p>편리함</p>

                <img
                  className={styles.img_arrowDown}
                  src={IconArrowDown}
                  alt="화살표"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.subPage}>
        <div className={styles.container}>
          <div className={styles.mockupWrap}>
            <div className={styles.img_mockupMid}>
              <img src={screenshot1} alt="목업이미지" />
            </div>
          </div>

          <div className={styles.pointRound1}></div>
          <div className={styles.pointRound2}></div>
        </div>
      </section>

      <section className={styles.updatePage}>
        <div className={styles.container}>
          <div className={styles.mockupWrap}>
            <div className={styles.img_mockupBig}>
              <img src={screenshot2} alt="목업이미지" />
            </div>
          </div>

          <div
            className={`${styles.updateTitle} ${
              scrollPosition > (isMobile ? 1000 : 2000) ? styles.dark : ""
            }`}
          >
            <i className={styles.moonOrigin}></i>

            <div className={styles.night}>
              <span className={styles.star1}></span>
              <span className={styles.star2}></span>
              <span className={styles.star3}></span>
              <span className={styles.star4}></span>
              <span className={styles.star5}></span>
              <span className={styles.star6}></span>
              <span className={styles.star7}></span>
              <span className={styles.star8}></span>
              <span className={styles.star9}></span>
              <span className={styles.star10}></span>
              <span className={styles.star11}></span>
            </div>

            <div
              className={`${styles.contentTitle} ${
                scrollPosition > (isMobile ? 1000 : 2000) ? styles.dark : ""
              }`}
            >
              <small>실거래 데이터</small>
              <h3 className={styles.dark}>
                국토교통부의 데이터는
                <br />
                <span data-aos="fade-up">매일</span> 업데이트됩니다.
                <br />
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.listPage}>
        <div className={styles.container}>
          <div className={styles.listTitle}>
            <div className={styles.contentTitle}>
              <div data-aos="fade-up">
                <small>거래 내역 확인</small>
                <h3 className={styles.dark}>
                  우리동네<br></br>
                  <span className={styles.orange}>거래 정보</span>를 한눈에!
                </h3>
              </div>

              <span data-aos="fade-up">
                쉽고 편하게
                <br />
                아파트 실거래 내역과 매매 및 전/월세 거래를
                <br />한 눈에 확인할 수 있습니다.
              </span>
            </div>
          </div>

          <div className={styles.mockupWrap}>
            <div className={styles.img_mockupBig}>
              <img src={screenshot2} alt="목업이미지" />
            </div>
            <div className={styles.mockupRound}></div>
          </div>
        </div>
      </section>

      <section className={styles.detailPage}>
        <div className={styles.container}>
          <div
            className={`${styles.mockupWrap} ${
              scrollPosition > (isMobile ? 3000 : "") ? styles.active : ""
            }`}
          >
            <div className={styles.img_mockupBig}>
              <img src={screenshot3} alt="목업이미지" />
            </div>

            <div className={styles.img_mockupDetail}>
              <img src={screenshot4} alt="목업이미지" />
            </div>
            <div className={styles.mockupRound}></div>
          </div>

          <div className={styles.contentTitle}>
            <div data-aos="fade-up">
              <small>상세 정보</small>
              <h3 className={styles.dark}>
                상세 거래 내역부터
                <br />
                아파트의 여러 정보까지!
              </h3>
            </div>

            <span data-aos="fade-up">
              인근지하철, 학군, 건축물대장 등<br />
              거래된 아파트의 다양한 정보도 확인할 수 있습니다.
            </span>
          </div>
        </div>
      </section>

      <section className={styles.searchPage}>
        <div className={styles.container}>
          <div className={styles.contentTitle}>
            <small>편리한 검색</small>
            <h3 className={styles.dark}>
              <span data-aos="fade-up">쉽고</span>
              <br />
              <span data-aos="fade-up" data-aos-delay="300">
                빠르고
              </span>
              <br />
              <span data-aos="fade-up" data-aos-delay="600">
                간편하게
              </span>
            </h3>

            <span>
              최근 검색어, 거래일, 아파트명을 통한
              <br />
              편리한 검색 기능을 제공합니다.
            </span>
          </div>

          <div className={styles.mockupWrap}>
            <div className={styles.img_mockupBig}>
              <img src={screenshot5} alt="목업이미지" />
            </div>

            <div className={styles.mockupRound}></div>
          </div>
        </div>
      </section>

      <section className={styles.storePage}>
        <div className={styles.container}>
          <div className={styles.contentTitle}>
            <p className={styles.dark} data-aos="fade-up">
              지금 바로 광명시
              <br />
              아파트 거래를 확인해보세요!
            </p>
          </div>

          <div className={styles.mockupWrap}>
            <div className={styles.img_mockupSmall}>
              <img src={screenshot1} alt="목업이미지" />
            </div>
          </div>

          <div className={styles.btnWrap}>
            <a
              href="https://apps.apple.com/kr/app/%EA%B4%91%EB%AA%85%EC%B0%BE%EC%9E%90/id6451822761"
              target="_blank"
              rel="noreferrer"
            >
              <img src={IconApple} alt="애플로고"></img>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.app.findgwangmyeong"
              target="_blank"
              rel="noreferrer"
            >
              <img src={IconGoogle} alt="구글로고"></img>
              Google Play
            </a>
          </div>
        </div>

        <div className={styles.storeBackground}>
          <div className={styles.backRound}></div>
        </div>
      </section>
    </main>
  );
};

export default Gwangmyeong;
