import { useState } from "react";
import cookie from "react-cookies";

import styles from "./onebiteword.module.scss";

const CardOverlay = () => {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(!close);

    cookie.save("visit", "N", {
      path: "/",
    });
  };

  return (
    <div className={`${styles.cardOverlay} ${close ? styles.none : ""}`}>
      <button type="button" onClick={handleClose}></button>

      <div className={styles.swipeIcon}>
        <div className={styles.path}></div>
        <div className={styles.hand}></div>
      </div>

      <p>
        좌우로 스와이프해 <br />
        다음 단어를 확인해 주세요.
      </p>
    </div>
  );
};

export default CardOverlay;
