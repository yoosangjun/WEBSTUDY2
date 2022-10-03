import React from "react";
import styles from "../css/style.module.css";
import { Link } from "react-router-dom";

const Board = () => {
  return (
    <section className={styles.Boardsec}>
      <div className={styles.Board}>
        <Link to="/write" className={styles.writebtn}>
          글쓰기
        </Link>
        <div className={styles.topmenu}>
          <div className={styles.menulist}>번호</div>
          <div className={styles.menulist}>글쓴이</div>
          <div className={styles.menulist}>제목</div>
          <div className={styles.menulist}>등록일</div>
          <div className={styles.menulist}>조회수</div>
        </div>
        <div className={styles.noticeboard}>
          <div className={styles.number}>1</div>
          <div className={styles.writer}>봉구</div>
          <div className={styles.title}>부럽지가 않아</div>
          <div className={styles.registration}>22.05.14</div>
          <div className={styles.views}>22</div>
        </div>
      </div>
    </section>
  );
};

export default Board;
