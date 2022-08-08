import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Culinar</title>
        <meta name="description" content="culinar.in is restaurant recommendation app powered by machine learning." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://culinar.in" target="_blank" rel="noopener noreferrer">Culinar</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://culinar.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright 2022 Culinar<sup>&copy;</sup>
        </a>
      </footer>
    </div>
  )
}

export default Home
