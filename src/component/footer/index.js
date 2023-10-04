import React, { useState } from "react";

import styles from './footer.module.scss';
import Privacy from "../../page/privacy";

export default function Footer() {
    const [showPrivacyPop, setShowPrivacyPop] = useState(false);

    /// [개인정보처리방침] 이벤트
    const togglePrivacy = (event) => {
        setShowPrivacyPop(!showPrivacyPop)
    };
    
    return (
        <>
            {showPrivacyPop ? <Privacy onClick={togglePrivacy} /> : null}

            <footer>
                <div className={styles.footerContainer}>
                    <ul className={styles.footerList}>
                        <li><a onClick={togglePrivacy}>개인정보 처리방침</a></li>
                        <li><a href="https://open.kakao.com/o/sPB3tYBf" target="_blank">서비스 문의</a></li>
                    </ul>

                    <div className={styles.footerCopy}>
                        <a>Copyright © MerryEddyHouse. All rights reserved</a>
                    </div>
                </div>
            </footer>
        </>
    )
}