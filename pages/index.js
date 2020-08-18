import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TweetForm from '../components/TweetForm'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido al visualizador de Tweets
        </h1>

        <p className={styles.description}>
          Busca el Tweet que quieras, pega la URL acá y verás más allá de lo que esperabas
        </p>
        <TweetForm></TweetForm>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Cómo ir a la cancha? &rarr;</h3>
            <p>Expertos en vender boletos y comprar soja</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Cómo ser un drag queen? &rarr;</h3>
            <p>Consejos de Ivana the tuck</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Ejemplos &rarr;</h3>
            <p>Tweets populares</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3> BOO &rarr;</h3>
            <p>
              Esto es un falso link oucker
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
