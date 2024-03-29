import React, { useState } from "react";

import styles from "./footer.module.scss";
import Privacy from "../../page/privacy";

export default function Footer() {
  const [showPrivacyPop, setShowPrivacyPop] = useState(false);

  /// [개인정보처리방침] 이벤트
  const togglePrivacy = () => {
    setShowPrivacyPop(!showPrivacyPop);
  };

  return (
    <>
      {showPrivacyPop ? <Privacy onClick={togglePrivacy} /> : null}

      <footer>
        <div className={styles.footerContainer}>
          <ul className={styles.footerList}>
            <li>
              <a
                href="https://open.kakao.com/o/sPB3tYBf"
                target="_blank"
                rel="noreferrer"
              >
                서비스 문의
              </a>
            </li>
          </ul>

          <div className={styles.footerCopy}>
            <span>Copyright © MerryEddyHouse. All rights reserved</span>
          </div>
        </div>
      </footer>
    </>
  );
}
