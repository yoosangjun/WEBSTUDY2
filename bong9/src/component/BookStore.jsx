import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "../css/style.module.css";
import axios from "axios";
import BookItem from "./BookItem";
import { Link, Router, Routes, Route } from "react-router-dom";

const BookStore = () => {
  const token = "4e23b7c6c4de86d2386e498f5e5bf1dc";
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("");
  const [text, setText] = useState("");
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const numPages = Math.ceil(search.length / limit);

  // 내가 요청할 호스트주소와 해당주소로 요청했을때 토큰값 (api키)을 정의해논 함수
  const Kakao = axios.create({
    baseURL: "https://dapi.kakao.com",
    headers: {
      Authorization: `KakaoAK ${token}`,
    },
  });
  // 해당 호스트주소+api가 있는 요청주소와 요청 입력값을 받는 함수
  const bookSearch = (params) => {
    return Kakao.get("/v3/search/book", { params });
  };

  // 쿼리 변수에 값이 변화할때마다 함수
  useEffect(() => {
    if (query.length > 0) {
      BookSearchHandler(query, true);
    }
  }, [query]);

  // 책 서치 정의를 그려논 함수 이값은 카카오 개발 가이드에 자세히 나와있음
  const BookSearchHandler = async (query, reset) => {
    const params = {
      query,
      sort: "accuracy",
      page: 1,
      size: 50,
    };

    const { data } = await bookSearch(params);
    if (reset) {
      setSearch(data.documents);
    } else {
      setSearch(data.concat(data.documents));
    }
  };

  console.log(search);
  // if (data)
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      setQuery(text);
    }
  };
  const onTextUpdate = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <section className={styles.BookStore}>
        <Link to="/" className={styles.navbar__item__list}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          홈으로 가즈아~!
        </Link>
        <h1>프로그래밍 도서 검색</h1>
        <input
          type="text"
          onChange={onTextUpdate}
          className={styles.inputBox}
          placeholder="책 제목을 입력하세요"
          onKeyDown={onEnter}
        />
        <ul className={styles.books}>
          {search.slice(offset, offset + limit).map((item, index) => (
            <BookItem
              key={index}
              title={item.title}
              thumbnail={item.thumbnail}
              price={item.price}
              authors={item.authors[0]}
              publisher={item.publisher}
            />
          ))}
        </ul>
        <div className={styles.pageBtnbox}>
          <button
            className={styles.pageBtn}
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            &lt;
          </button>
          {Array(numPages)
            .fill()
            .map((_, i) => (
              <button
                className={styles.pageBtn}
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
              >
                {i + 1}
              </button>
            ))}
          <button
            className={styles.pageBtn}
            onClick={() => setPage(page + 1)}
            disabled={page === numPages}
          >
            &gt;
          </button>
        </div>
      </section>
    </>
  );
};

export default BookStore;
