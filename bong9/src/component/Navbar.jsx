import React from "react";
import styles from "../css/style.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <ul className={styles.navbar}>
        <div className={styles.navbar__logo}>
          <h1 className={styles.mainlogo}>수터's</h1>
        </div>
        <div className={styles.navbar__item}>
          <Link to="/">
            <li className={styles.navbar__item__list}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              수터's
            </li>
          </Link>
          <Link to="/BookStore">
            <li className={styles.navbar__item__list}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              프로그래밍 책검색
            </li>
          </Link>
          <Link to="/Board">
            <li className={styles.navbar__item__list}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              자유게시판
            </li>
          </Link>
          <Link to="/Login">
            <li className={styles.navbar__item__list}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              로그인
            </li>
          </Link>
        </div>
      </ul>
    </header>
  );
};

export default Navbar;
