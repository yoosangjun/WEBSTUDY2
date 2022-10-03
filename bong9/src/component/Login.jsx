import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import styles from "../css/style.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const formRef = useRef("");
  console.log(`렌더링 완료`);
  /* 제어식 컴포넌트 활용ex */
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const onChangeId = (e) => {
    setId(e.target.value);
    console.log(`이벤트가 일어날때마다 setId에 넣는 중 === 계속 렌더링 되는중
      값의 변화=> ${e.target.value}`);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
    console.log(`이벤트가 일어날때마다 setPw에 넣는 중 === 계속 렌더링 되는중
      값의 변화=> ${e.target.value}`);
  };

  /* 비제어식 컴포넌트 활용ex */

  const onSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();
    nav("/");
  };

  return (
    <>
      <Navbar />
      <section className={styles.Login}>
        <h1 className={styles.LoginTitle}>로그인 페이지</h1>
        <form ref={formRef} className={styles.formBox} onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="ID"
            className={styles.idBox}
            onChange={onChangeId}
          />
          <input
            type="password"
            placeholder="PW"
            className={styles.pwBox}
            onChange={onChangePw}
          />
          <button className={styles.LoginBtn}>로그인</button>
        </form>
      </section>
    </>
  );
};

export default Login;
