import React from "react";

import styles from './privacy.module.scss';

import { VscChromeClose } from "react-icons/vsc";

const Privacy = (props) => {
    return (
        <div className={styles.pagePop}>
            <div className={styles.privacyPage}>
                <button type="button" className={styles.btnClose} onClick={props.onClick}>
                    <VscChromeClose/>
                </button>

                <h3>개인정보 처리방침</h3>

                <div className={styles.privacyContent}>
                    <h4>[광명 찾자] 개인정보 처리방침</h4>
                    <p>※ 본 앱은 개인정보를 수집하지 않습니다.</p>             
                </div>
            </div>

        </div>
    )
}

export default Privacy;