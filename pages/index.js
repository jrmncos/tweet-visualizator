import Head from "next/head";
import styles from "../styles/Home.module.css";
import TweetForm from "../components/TweetForm";
import NavBar from "../components/NavBar";
import Tweet from "../components/Tweet";
import {useState} from 'react'
import TweetRepresentation from "../components/TweetRepresentation";
import Loader from "../components/Loader";

export default function Home() {
  const [tweet, setTweet] = useState("")
  const [visualization, setVisualization] = useState("")
  return (
    <div className={styles.container}>
  
      <Head>
        <title>Tweet Visualizator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar></NavBar>
      
      <main className={styles.main}>
        <h1 className={styles.title}>Visualizador de Tweets</h1>

        <p className={styles.description}>
          Busca el Tweet que quieras, pega la URL acá y verás más allá de lo que
          esperabas
        </p>

        <div className="pa4 black-80">
          <TweetForm setTweet={setTweet} />
          {tweet &&
            <> 
              <Tweet tweetText={tweet}/>
              <br></br>
              
              <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-blue">
                Visualizar
              </button>
            </>
          }
          {visualization && <TweetRepresentation/>}
          <Loader/>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/jrmncos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Creado por{" "}
          <img src="/jrmncos.jpg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
