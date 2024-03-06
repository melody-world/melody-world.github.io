import React, { useState, useLayoutEffect } from "react";
import CardSlider from "./cardSlider";
import CardOverlay from "./cardOverlay";
import cookie from "react-cookies";

import styles from "./onebiteword.module.scss";

export default function Onebiteword() {
  const [wordList, setWordList] = useState([]);
  const [visit, setVisit] = useState();

  const getWordList = async () => {
    try {
      const res = await fetch(`https://onebiteword.codedream.co.kr/api/words`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "9e1736c43d19118e6ce4302118af337109491ecc52757dfb949bad6a7940b0c2",
        },
        cache: "no-store",
      });

      const data = await res.json();
      const result = data.result;

      if (result > 0) {
        const list = getRandomWords(result, 5);
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
        <button type="button" className={styles.suffleBtn} onClick={() => shuffleCard()}>
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
