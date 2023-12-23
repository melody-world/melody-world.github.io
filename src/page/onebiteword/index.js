import React, { useState, useLayoutEffect } from "react";
import Request from "services/Request";
import CardSlider from "./cardSlider";
import CardOverlay from "./cardOverlay";
import cookie from "react-cookies";

import styles from "./onebiteword.module.scss";

export default function Onebiteword() {
  const [wordList, setWordList] = useState([]);
  const [visit, setVisit] = useState();

  const getWordList = async () => {
    try {
      const res = await Request.get(`/obw/1.json`);
      const data = res.data.data;
      let list;

      if (data.length > 0) {
        list = getRandomWords(data, 5);
        setWordList(list);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getRandomWords = (list, count) => {
    const result = [...list].sort(() => Math.random() - 0.5);
    return result.slice(0, count);
  };

  const shuffleCard = () => {
    getWordList();
    addChannel(true);
  };

  useLayoutEffect(() => {
    getWordList();
    setVisit(cookie.load("visit"));
  }, []);

  return (
    <main className={styles.cardPage}>
      {visit !== "N" ? <CardOverlay /> : ""}

      <CardSlider data={wordList} />

      <div className={styles.cardBtn}>
        {/* <button type="button">테스트</button> */}
        <button
          type="button"
          className={styles.suffleBtn}
          onClick={() => shuffleCard()}
        >
          단어 섞기
        </button>
      </div>
    </main>
  );
}

const addChannel = (isShuffled) => {
  const { todayChannel } = window;

  if (todayChannel) {
    todayChannel.postMessage(
      JSON.stringify({
        isShuffled: isShuffled,
      })
    );
  }
};
