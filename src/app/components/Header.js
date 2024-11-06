// Header.js
"use client";

import FetchButton from "./FetchButton";
import styles from "./Header.module.css"

export default function Header({ fetchPictures, loading }) {
  return (
    <section className={styles.headerContainer}>
      <h1>Page of Kitties</h1>
      <FetchButton onClick={fetchPictures} loading={loading} />
    </section>
  );
}
