"use client";

import styles from "./FetchButton.module.css"

export default function FetchButton({ onClick, loading }) {
  return (
    <div className={styles.centerContainer}>

      <button
        disabled={loading}
        className={styles.dataBtn}
        onClick={onClick}
        >
        {loading ? "Collecting Data" : "Collect Cats"}
      </button>
    </div>
  );
}
