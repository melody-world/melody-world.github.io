import styles from "./intro.module.scss";
import INTRO_LIST from "constants/introData.js";

export default function Intro() {
  return (
    <main className={styles.introPage}>
      <div className={styles.container}>
        {INTRO_LIST.map((item) => {
          return (
            <div className={styles.memberWrapper} key={item.id}>
              <div className={styles.imageWrapper}>
                <img src={item.introImage1} alt="멤버 이미지" />

                <div className={styles.introTalk}>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
              </div>

              <div className={styles.infoWrapper}>
                <div className={styles.infoTitle}>
                  <h3>{item.introName}</h3>
                  <p>{item.devSide}</p>
                </div>

                <div className={styles.infoContent}>
                  <div className={styles.stackWrapper}>
                    <span>사용 기술</span>
                    <div>
                      {item.devStack.map((stack) => {
                        return (
                          <img
                            src={stack.image}
                            alt={stack.name}
                            key={stack.name}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <a href={item.githubUrl}>깃허브 바로가기</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
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
