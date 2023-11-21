import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Movie from "./components/Movie/Movie";

const App = () => {
  const styles = {
    cardCenter: "grid place-content-center border",
  };

  return (
    <>
      <Navbar />
      <div className="grid h-auto place-content-center gap-10 border px-10 py-10 sm:grid-cols-2 md:grid-cols-3">
        <div className={styles.cardCenter}>
          <Movie />
        </div>
        <div className={styles.cardCenter}>
          <Movie />
        </div>
        <div className={styles.cardCenter}>
          <Movie />
        </div>
        <div className={styles.cardCenter}>
          <Movie />
        </div>
        <div className={styles.cardCenter}>
          <Movie />
        </div>
        <div className={styles.cardCenter}>
          <Movie />
        </div>
        <div className={styles.cardCenter}>
          <Movie />
        </div>
        <div className={styles.cardCenter}>
          <Movie />
        </div>
      </div>
    </>
  );
};

export default App;
