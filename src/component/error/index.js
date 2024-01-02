import { Link } from "react-router-dom";
import styles from "./error.module.scss";

const NotFound = () => {
  return (
    <section className={styles.errorPage}>
      <h2>404</h2>

      <p>찾을수 없는 페이지 입니다.</p>
      <p>요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요. :)</p>

      <a href="/">메인으로 이동</a>
    </section>
  );
};

export default NotFound;
