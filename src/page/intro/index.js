import styles from "./intro.module.scss";
import INTRO_LIST from "constants/introData.js";

export default function Intro() {
  return (
    <main>
      {/* 공통 가치 영역 */}
      <section className={styles.valuePage}>
        <div className={styles.container}>
          <h4>Core Value</h4>
          <div className={styles.valueText}>
            <p>함께 성장을 가장 중요한 가치로 생각합니다.</p>
            <span>test</span>
          </div>
        </div>
      </section>

      {/* 멤버 소개 영역 */}
      <section className={styles.memberPage}>
        <div className={styles.container}>
          <h2>
            디자인 툴 강의부터
            <br />
            디자인 이론과 코딩 지식까지
          </h2>

          <ul className={styles.memberList}>
            <li></li>
          </ul>
        </div>
      </section>

      <section className={styles.contactPage}>
        {/* 연락 영역 */}
        <div className={styles.container}>
          <p>메리&에디하우스의 </p>
          <h3>문은 항상 열려 있습니다.</h3>
          <span>
            '메리에디하우스'에게 궁금한게 있나요?
            <br />
            언제든지, 편하게 문의를 남겨주세요.
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
    </main>

    // <main className={styles.introPage}>
    //   <div className={styles.container}>
    //     {INTRO_LIST.map((item) => {
    //       return (
    //         <div className={styles.memberWrapper} key={item.id}>
    //           <div className={styles.imageWrapper}>
    //             <img src={item.introImage1} alt="멤버 이미지" />

    //             <div className={styles.introTalk}>
    //               <p></p>
    //               <p></p>
    //               <p></p>
    //             </div>
    //           </div>

    //           <div className={styles.infoWrapper}>
    //             <div className={styles.infoTitle}>
    //               <h3>{item.introName}</h3>
    //               <p>{item.devSide}</p>
    //             </div>

    //             <div className={styles.infoContent}>
    //               <div className={styles.stackWrapper}>
    //                 <span>사용 기술</span>
    //                 <div>
    //                   {item.devStack.map((stack) => {
    //                     return (
    //                       <img
    //                         src={stack.image}
    //                         alt={stack.name}
    //                         key={stack.name}
    //                       />
    //                     );
    //                   })}
    //                 </div>
    //               </div>

    //               <a href={item.githubUrl}>깃허브 바로가기</a>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </main>
  );
}

const isLeftPosition = (id) => {
  return id % 2 === 0;
};

const getIntroProfile = (map) => {
  return (
    <div className={styles.imageWrapper}>
      <img src="" alt="멤버 이미지" />
    </div>
    // <div className={styles.imageWrapper}>
    //   <div className={styles.hoverWrapper}>
    //     <div>
    //       <figure className={styles.imageFront}>
    //         <img src={map.introImage1} alt={`introImage1${map.id}`} />
    //       </figure>

    //       <figure className={styles.imageBack}>
    //         <img src={map.introImage2} alt={`introImage2${map.id}`} />
    //         <figcaption>
    //           <a href={map.githubUrl} target="_blank" rel="noreferrer noopener">
    //             <img
    //               src={require("assets/img/intro/icon_github.png")}
    //               alt={`github${map.id}`}
    //             />
    //             <p>@{map.githubNickname}</p>
    //           </a>
    //         </figcaption>
    //       </figure>
    //     </div>
    //   </div>
    // </div>
  );
};
