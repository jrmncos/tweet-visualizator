import Head from "next/head";
import styles from "../styles/Home.module.css";
import TweetForm from "../components/TweetForm";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Tweet Visualizator</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar></NavBar>
        <main className={styles.main}>
          <h1 className={styles.title}>Bienvenido al visualizador de Tweets</h1>

          <p className={styles.description}>
            Busca el Tweet que quieras, pega la URL acá y verás más allá de lo
            que esperabas
          </p>

          <TweetForm />
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
  );
}
