import React from "react";
import styles from "../css/style.module.css";
import ani from "../imgs/ani.jpeg";
const Home = () => {
  return (
    <section className={styles.Home} id="Home">
      <img alt="" src={ani} className={styles.homeimg} />
    </section>
  );
};

export default Home;
