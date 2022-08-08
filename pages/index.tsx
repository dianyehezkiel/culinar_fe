import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'

const defaultValue = {
  data: "",
  message: "",
  status_code: 0,
}

const Home: NextPage = () => {
  const [data, setData] = React.useState(defaultValue)

  React.useEffect(() => {
    const fetchHello = async () => {
      const { data } = await axios.get('https://culinar-ml.herokuapp.com')

      setData(data)
    }

    fetchHello()
  })
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
        <div className={styles.card}>
          <h2>API response</h2>
          <p className={styles.code}>
            {`data: ${data.data}
            message: ${data.message}
            status_code: ${data.status_code}`}
          </p>
        </div>
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
