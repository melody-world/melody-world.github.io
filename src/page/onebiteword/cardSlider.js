import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import CardSpeak from "./cardSpeak";

import styles from "./onebiteword.module.scss";

const CARD_OFFSET = 25;
const SCALE_FACTOR = 0.055;

const CardSlider = (props) => {
  const word_list = props.data;
  const [cards, setCards] = useState([]);

  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
  };

  useEffect(() => {
    setCards(word_list);
  }, [word_list]);

  return (
    <section className={styles.cardWrap}>
      <ul className={styles.cardList}>
        {cards.map((item, index) => {
          const canDrag = index === 0;

          return (
            <motion.li
              key={index}
              style={{
                cursor: canDrag ? "grab" : "auto",
              }}
              animate={{
                bottom: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: word_list.length - index,
              }}
              drag={canDrag ? "y" : false}
              dragConstraints={{
                top: 0,
                bottom: 0,
              }}
              onDragEnd={() => moveToEnd(index)}
            >
              <span>{item.wordMean}</span>
              <p>{item.wordName}</p>

              <CardSpeak word={item.wordName} />
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default CardSlider;
