import styles from "./onebiteword.module.scss";

const CardSpeak = (word) => {
  const itemWord = word;

  const playWord = () => {
    if (
      typeof SpeechSynthesisUtterance === "undefined" ||
      typeof window.speechSynthesis === "undefined"
    ) {
      alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
      return;
    }

    // 현재 읽고있다면 초기화
    window.speechSynthesis.cancel();

    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = 1;
    speechMsg.pitch = 1.2;
    speechMsg.lang = "en-US";
    speechMsg.text = itemWord.word;

    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg);
  };

  return (
    <button
      type="button"
      className={styles.cardSpeak}
      onClick={playWord}
    ></button>
  );
};

export default CardSpeak;
