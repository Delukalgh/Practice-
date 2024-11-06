// Header.js
"use client";

import FetchButton from "./FetchButton";
import styles from "./Header.module.css"
import Image from "next/image";

export default function Header({ fetchPictures, loading }) {
  return (
    <section className={styles.headerContainer}>
      <h1>Page of Kitties</h1>
      <div className={styles.colContainer}>
        <Image src="/image/cryingCat.webp" alt="Crying Cat Meme" width={1000} height={1500}/>
        <FetchButton onClick={fetchPictures} loading={loading} />
      </div>
    </section>
  );
}
