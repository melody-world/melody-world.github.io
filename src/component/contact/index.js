import { useEffect } from "react";
import styles from "./contact.module.scss";

export default function Contact() {
  const kakaoHandler = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init("2b70e2401736015a222ce4273498875d");
      }

      kakao.Channel.addChannel({
        channelPublicId: "_XfHxaG",
      });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <section className={styles.contactPage}>
      <div className={styles.container}>
        <p>코드드림의 </p>
        <h3>문은 항상 열려 있습니다.</h3>
        <span>언제든지, 편하게 문의를 남겨주세요</span>
        <a onClick={() => kakaoHandler()} target="_blank" rel="noreferrer">
          서비스 문의하기
        </a>
      </div>
    </section>
  );
}
