import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Request from "services/Request";
import styles from "./onebiteword.module.scss";

export default function Onebiteword() {
  const [wordList, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Request.get(`/onebiteword/1.json`);
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
          </div>
        ))}
      </div>
    </main>
  );
}
