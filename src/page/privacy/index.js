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
        <div>
          <p>
            <h2>개인정보 처리방침</h2>
          </p>
        </div>
        <div>
          <p>
            개인정보 처리방침이란 이용자의 소중한 개인정보를 보호하여 안심하고 서비스를 이용할 수 있도록 회사가 서비스를
            운영함에 있어 준수해야 할 지침을 말합니다. 코드드림은 사용자의 개인정보를 존중하며 보호하기 위해 최선을
            다하고 있습니다. <br />
            코드드림은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고
            원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
          </p>
        </div>

        <hr />

        <div>
          <p>
            <strong>1. 수집하는 개인정보의 항목 및 수집 목적</strong>
          </p>
          <p>
            1.1. 앱 사용자의 식별을 위해 수집되는 개인정보의 항목은 다음과 같습니다.
            <ul>
              <li>사용자의 기기 식별자 (예: 광고 ID, 기기 ID)</li>
              <li>애플리케이션 사용 기록</li>
            </ul>
          </p>
          <p>
            1.2. 개인정보의 수집 목적은 다음과 같습니다.
            <ul>
              <li>애플리케이션의 기능 제공 및 최적화</li>
              <li>서비스 품질 향상</li>
              <li>사용자 편의 제공</li>
              <li>이벤트 및 마케팅 활동에 참여</li>
            </ul>
          </p>
        </div>

        <div>
          <p>
            <strong>2. 개인정보의 보유 및 이용 기간</strong>
          </p>
          <p>
            2.1. 개인정보의 보유 및 이용 기간은 해당 정보의 수집 목적이 달성되거나 사용자가 개인정보 삭제를 요청한
            경우에 한정됩니다.
          </p>
        </div>

        <div>
          <p>
            <strong>3. 개인정보의 제3자 제공</strong>
          </p>
          <p>
            3.1. 본 애플리케이션은 사용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 법률적인 의무가 있는 경우 또는
            사용자의 동의가 있는 경우에 한하여 예외적으로 제공될 수 있습니다.
          </p>
        </div>

        <div>
          <p>
            <strong>4. 보안 조치</strong>
          </p>
          <p>
            4.1. 본 애플리케이션은 적절한 보안 조치를 이용하여 사용자의 개인정보를 보호합니다. 이에는 암호화, 접근 제어,
            네트워크 보안 등이 포함됩니다.
          </p>
        </div>

        <div>
          <p>
            <strong>5. 이용자의 권리와 행사 방법</strong>
          </p>
          <p>
            5.1. 이용자는 자신의 개인정보에 대한 열람, 정정, 삭제를 요청할 수 있습니다. 이에 대한 절차는 애플리케이션 내
            설정 화면에서 제공됩니다.
          </p>
        </div>

        <div>
          <p>
            <strong>6. 개인정보 처리방침의 변경</strong>
          </p>
          <p>
            6.1. 본 개인정보 처리방침은 법령이나 서비스의 변경사항에 따라 변경될 수 있습니다. 변경사항이 있는 경우
            애플리케이션 내 공지사항을 통해 사용자에게 알립니다.
          </p>
        </div>

        <div>
          <p>
            <strong>7. 문의처</strong>
          </p>
          <p>7.1. 개인정보 처리방침에 관한 문의사항은 다음 연락처로 문의해주시기 바랍니다.</p>
          <p>
            코드드림 : <a href="mailto:szhyun2002@gmail.com">szhyun2002@gmail.com</a>
          </p>
        </div>

        <div>
          <p>
            <strong>8. 개인정보 보호책임자</strong>
          </p>
          <p>8.1. 개인정보 보호책임자는 다음과 같습니다.</p>
          <p>
            <ul>
              <li>이름 : 이승현</li>
              <li>소속 : 코드드림</li>
              <li>
                메일주소 : <a href="mailto:szhyun2002@gmail.com">szhyun2002@gmail.com</a>
              </li>
            </ul>
          </p>
        </div>

        <div>
          <p>이 개인정보 처리방침은 2023년 12월 28일부터 적용됩니다.</p>
        </div>

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
