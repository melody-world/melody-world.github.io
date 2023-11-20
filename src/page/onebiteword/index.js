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
        const dataList = response.data.data.map((data) => ({
          ...data,
        }));

        setData(dataList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
