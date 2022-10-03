import React from "react";
import styles from "../css/style.module.css";

const BookItem = (props) => {
  return (
    <li className={styles.books__list}>
      <div className={styles.title}>제목 : {props.title}</div>
      <div className={styles.authors}>저자 : {props.authors}</div>
      <div className={styles.price}>가격 : {props.price}원</div>
      <div className={styles.publisher}>출판사 : {props.publisher}</div>
      <div className={styles.thumbnail}>
        <img src={props.thumbnail} alt="" />
      </div>
    </li>
  );
};

export default BookItem;
