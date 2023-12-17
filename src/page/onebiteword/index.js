import React, { useState, useEffect, useRef } from "react";
import Request from "services/Request";

import styles from "./onebiteword.module.scss";

export default function Onebiteword() {
  const [wordList, setWordList] = useState([]);
  const [cntIndex, setCntIndex] = useState();
  const [suffleStatus, setSuffleStatus] = useState(false);

  const getWordList = async () => {
    try {
      const res = await Request.get(`/obw/1.json`);
      const data = res.data.data;
      let list;

      if (data.length > 0) {
        list = getRandomWords(data, 5);
      }

      setWordList(list);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getRandomWords = (list, count) => {
    const result = [...list].sort(() => Math.random() - 0.5);
    return result.slice(0, count);
  };

  const playWord = (text) => {
    window.speechSynthesis.cancel();

    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = 1;
    speechMsg.pitch = 1.2;
    speechMsg.lang = "en-US";
    speechMsg.text = text;

    window.speechSynthesis.speak(speechMsg);
  };

  const suffleCard = () => {
    if (!suffleStatus) getWordList();

    setCntIndex();
    setSuffleStatus((prev) => !prev);
  };

  const filpCard = (index) => {
    if (index === cntIndex) {
      setCntIndex();
      return;
    }

    suffleStatus && setCntIndex(index);
  };

  useEffect(() => {
    //window.speechSynthesis.getVoices();

    getWordList();
  }, []);

  return (
    <main>
      <section className={styles.cardPage}>
        <ul
          className={`${styles.cardList} ${
            suffleStatus ? styles.transition : ""
          }`}
        >
          {wordList.map((item, index) => (
            <li
              key={index}
              className={styles.card}
              onClick={() => filpCard(index)}
            >
              <div
                className={`${styles.cardFilp} ${
                  cntIndex === index ? styles.active : ""
                }`}
              >
                <div className={styles.frontCard}>
                  <h3>{item.wordName}</h3>
                  <button
                    type="button"
                    onClick={playWord(item.wordName)}
                  ></button>
                </div>
                <div className={styles.backCard}>
                  <h3>{item.wordMean}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.mixBtn}
          onClick={() => suffleCard()}
        >
          석기시대
        </button>
      </section>
    </main>
  );
}
