import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.contactPage}>
      <div className={styles.container}>
        <p>코드드림의 </p>
        <h3>문은 항상 열려 있습니다.</h3>
        <span>
          언제든지, 편하게 문의를 남겨주세요
        </span>
        <a
          href="https://open.kakao.com/o/sPB3tYBf"
          target="_blank"
          rel="noreferrer"
        >
          서비스 문의하기
        </a>
      </div>
    </section>
  );
}
