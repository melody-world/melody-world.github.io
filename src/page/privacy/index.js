import React, { useState } from "react";

import styles from "./privacy.module.scss";

export default function Privacy({ appName }) {
  const [active, setActive] = useState(true);

  const handleMore = () => {
    setActive((prev) => !prev);
  };

  return (
    <main>
      <div className={styles.container}>
        <h5>개인정보 처리방침</h5>
        <p>
          코드드림은 사용자의 개인정보를 존중하며 보호하기 위해 최선을 다하고 있습니다. 이 개인정보 처리방침은 본
          애플리케이션이 수집하는 정보 및 해당 정보가 어떻게 사용되고 보호되는지에 대한 내용을 설명합니다.
        </p>

        <p>
          <strong>1. 수집하는 개인정보의 항목 및 수집 방법</strong>
        </p>
        <p>{appName}는(은) 사용자의 개인정보를 수집하지 않습니다.</p>
        <p>
          <strong>2. 개인정보의 이용 목적</strong>
        </p>
        <p>{appName}는(은) 사용자의 개인정보를 수집하지 않으므로, 개인정보의 이용 목적이 따로 존재하지 않습니다.</p>
        <p>
          <strong>3. 개인정보의 제공 및 공유</strong>
        </p>
        <p>{appName}는(은) 사용자의 개인정보를 제3자와 공유하지 않습니다.</p>
        <p>
          <strong>4. 개인정보의 보유 및 파기</strong>
        </p>
        <p>
          {appName}는(은) 사용자의 개인정보를 수집하지 않으므로, 보유 기간 및 파기 절차에 대한 규정이 따로 존재하지
          않습니다.
        </p>
        <p>
          <strong>5. 개인정보에 대한 접근 및 정정</strong>
        </p>
        <p>
          {appName}는(은) 사용자의 개인정보를 수집하지 않으므로, 사용자는 {appName}에 개인정보에 대한 접근 및 정정을
          요청할 필요가 없습니다.
        </p>
        <p>
          <strong>6. 개인정보 보호를 위한 기술적, 관리적, 물리적 대책</strong>
        </p>
        <p>
          {appName}는(은) 사용자의 개인정보를 수집하지 않으므로, 개인정보 보호를 위한 기술적, 관리적, 물리적 대책에 대한
          규정이 따로 존재하지 않습니다.
        </p>
        <p>
          <strong>7. 개인정보 보호책임자 및 문의처</strong>
        </p>
        <p>
          {appName}는(은) 개인정보를 수집하지 않으므로 개인정보 보호책임자 및 문의처에 대한 규정이 따로 존재하지
          않습니다. 기타 문의사항은 szhyun2002@gmail.com으로 보내주시기 바랍니다.
        </p>
        <p>
          <strong>8. 개정과정</strong>
        </p>
        <p>
          본 개인정보 처리방침의 내용은 법령, 정책 또는 보안기술의 변경에 따라 변경될 수 있습니다. 이에 따른 개정 내용은
          애플리케이션 내 공지사항을 통해 사용자에게 통지됩니다.
        </p>
        <p>개인정보 처리방침 시행일자 : 2023.12.27</p>
        <hr></hr>

        <div>
          ⓒ 2023 <a href="/">코드드림</a>. All rights reserved.
        </div>
        {/* <section className={active ? styles.open : ""}>
          <strong>Privacy Policy</strong>
          <p>
            코드드림 built the <span>{appName}</span> app as a Free app. This service is provided by 코드드림 at no cost
            and is intended for use as is.
          </p>
          <p>
            This page is used to inform visitors regarding my policies with the collection, use, and disclosure of
            Personal Information if anyone decided to use my service.
          </p>
          <p>
            If you choose to use my service, then you agree to the collection and use of information in relation to this
            policy. The Personal Information that I collect is used for providing and improving the service. I will not
            use or share your information with anyone except as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are
            accessible at <span>{appName}</span> unless otherwise defined in this Privacy Policy.
          </p>

          <strong>Information Collection and Use</strong>
          <p>
            For a better experience, while using our service, I may require you to provide us with certain personally
            identifiable information, including but not limited to no information. The information that I request will
            be retained on your device and is not collected by me in any way.
          </p>
          <div>
            <p>The app does use third-party services that may collect information used to identify you.</p>
            <p>Link to the privacy policy of third-party service providers used by the app</p>
            <ul>
              <li>
                <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">
                  Google Play Services
                </a>
              </li>
            </ul>
          </div>

          <p>
            <strong>Log Data</strong>
          </p>
          <p>
            I want to inform you that whenever you use my service, in a case of an error in the app I collect data and
            information (through third-party products) on your phone called Log Data. This Log Data may include
            information such as your device Internet Protocol (“IP”) address, device name, operating system version, the
            configuration of the app when utilizing my service, the time and date of your use of the service, and other
            statistics.
          </p>

          <strong>Cookies</strong>

          <p>
            Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These
            are sent to your browser from the websites that you visit and are stored on your device's internal memory.
          </p>
          <p>
            These service do not knowingly collect personally identifiable information from children under 13 years of
            age. In the case I discover that a child under 13 has provided me with personal information, I immediately
            delete this from our servers. If you are a parent or guardian and you are aware that your child has provided
            us with personal information, please contact me so that I will be able to do the necessary actions.
          </p>

          <strong>Service Providers</strong>

          <p>I may employ third-party companies and individuals due to the following reasons:</p>
          <ul>
            <li>To facilitate our service;</li> <li>To provide the service on our behalf;</li>
            <li>To perform service-related services; or</li> <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p>
            I want to inform users of this service that these third parties have access to their Personal Information.
            The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to
            disclose or use the information for any other purpose.
          </p>

          <strong>Security</strong>
          <p>
            I value your trust in providing us your Personal Information, thus we are striving to use commercially
            acceptable means of protecting it. But remember that no method of transmission over the internet, or method
            of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
          </p>

          <strong>Links to Other Sites</strong>

          <p>
            This service may contain links to other sites. If you click on a third-party link, you will be directed to
            that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review
            the Privacy Policy of these websites. I have no control over and assume no responsibility for the content,
            privacy policies, or practices of any third-party sites or services.
          </p>

          <strong>Children’s Privacy</strong>
          <div>
            <p>
              These service do not knowingly collect personally identifiable information from children under 13 years of
              age. In the case I discover that a child under 13 has provided me with personal information, I immediately
              delete this from our servers. If you are a parent or guardian and you are aware that your child has
              provided us with personal information, please contact me so that I will be able to do the necessary
              actions.
            </p>
          </div>

          <strong>Changes to This Privacy Policy</strong>
          <p>
            I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically
            for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
          <p>This policy is effective as of 2023-11-22</p>

          <strong>Contact Us</strong>
          <p>
            If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at
            szhyun2002@gmail.com.
          </p>
          <p>
            This privacy policy page was created at
            <a href="https://privacypolicytemplate.net" target="_blank" rel="noopener noreferrer">
              privacypolicytemplate.net
            </a>
            and modified/generated by
            <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" rel="noopener noreferrer">
              App Privacy Policy Generator
            </a>
          </p>
        </section>

        <button type="button" onClick={handleMore}>
          {active ? "닫기" : "더보기"}
        </button> */}
      </div>
    </main>
  );
}
