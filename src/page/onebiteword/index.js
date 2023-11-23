import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Request from "services/Request";
import styles from "./onebiteword.module.scss";

export default function Onebiteword() {
  const [wordList, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Request.get(`/obw/1.json`);
        let dataList = response.data.data.map((data) => ({
          ...data,
        }));

        if (Array.from(dataList).length > 0) {
          dataList = getRandomItems(dataList, 10);
        }

        setData(dataList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  /**
   * 배열로부터 입력받은 개수만큼 랜덤하게 값 추출
   * @param {Array} arr
   * @param {int} count
   * @returns
   */
  const getRandomItems = (arr, count) => {
    const resultArray = [...arr].sort(() => Math.random() - 0.5);
    return resultArray.slice(0, count);
  };

  return (
    <main>
      <div className={styles.container}>
        <h1>단어리스트</h1>

        {wordList.map((item) => (
          <div className={styles.wordWrapper} key={item.wordSeq}>
            <div className={styles.wordName}>{item.wordName}</div>
            <div className={styles.wordMean} style={{ wordWrap: "break-word" }}>
              {item.wordMean}
            </div>
            <div>
              <button
                onClick={() => {
                  if (
                    typeof SpeechSynthesisUtterance === "undefined" ||
                    typeof window.speechSynthesis === "undefined"
                  ) {
                    alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
                    return;
                  }

                  window.speechSynthesis.cancel(); // 현재 읽고있다면 초기화

                  const speechMsg = new SpeechSynthesisUtterance();
                  speechMsg.rate = 1; // 속도: 0.1 ~ 10
                  speechMsg.pitch = 1.2; // 음높이: 0 ~ 2
                  speechMsg.lang = "en-US";
                  speechMsg.text = item.wordName;

                  // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
                  window.speechSynthesis.speak(speechMsg);
                }}
              >
                듣기
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
