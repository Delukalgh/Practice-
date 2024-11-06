// Home.js
"use client";

import { useState } from "react";
import Header from "./components/Header";
import styles from "./Home.module.css";

export default function Home() {
  const [pictureContents, setPictureContents] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchPictures() {
    setLoading(true);
    const API_URL = "https://api.thecatapi.com/v1/images/search?limit=5";
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPictureContents(data.slice(0, 5));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  const PictureDisplay = () => {
    if (loading) {
      return (
        <section className={styles.loading}>Spawning in Kitties...</section>
      );
    }

    if (pictureContents) {
      return (
        <section className={styles.pictureDisplay}>
          {pictureContents.map((picture, i) => (
            <article key={i} className={styles.pictureCard}>
              <img src={picture.url} alt={`Cat picture ${i + 1}`} />
              <p className={styles.info}>Width: {picture.width} px</p>
              <p className={styles.info}>Height: {picture.height} px</p>
              <p className={styles.info}>Breed: Unknown</p>
              <p className={styles.info}>Image URL: <a href={picture.url} target="_blank" rel="noopener noreferrer">{picture.url}</a></p>
            </article>
          ))}
        </section>
      );
    }

    return (
      <section className={styles.loading}>
        No content yet? Bring some cats in!
      </section>
    );
  };

  return (
    <div className={styles.pageContainer}>
      <Header fetchPictures={fetchPictures} loading={loading} />
      <PictureDisplay />
    </div>
  );
}
