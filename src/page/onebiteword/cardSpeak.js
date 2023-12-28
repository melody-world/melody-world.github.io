import styles from "./onebiteword.module.scss";

const CardSpeak = (word) => {
  const itemWord = word;

  const playWord = () => {
    /**
     * 안드로이드 webview에서는 speechSynthesis를 지원하지 않는다.
     * 디바이스에 따라 androidChannel / iosChannel을 분리시키고 androidChannel이 있는 경우에는 flutter 라이브러리를 이용해 단어를 읽을 수 있도록 개선했다.
     */
    const { androidChannel } = window;

    if (androidChannel) {
      androidChannel.postMessage("TEST");
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
