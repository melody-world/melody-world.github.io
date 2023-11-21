import React from "react";

import styles from "./privacy.module.scss";

export default function Privacy({ appName }) {
  return (
    <main>
      <div className={styles.container}>
        <span className={styles.title}>개인정보 처리방침</span>

        <div className={styles.contentWrapper}>
          <span className={styles.appName}>{appName}</span>은(는) 개인정보를 수집하지 않습니다.
        </div>
      </div>
    </main>
  );
}
