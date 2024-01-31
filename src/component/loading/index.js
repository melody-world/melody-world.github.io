import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <section className={styles.loadingPage}>
      <div className={styles.loading}></div>
    </section>
  );
};

export default Loading;
