import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/Container'
import styles from '../styles/pages/Home.module.css'

interface HomeProps {
  data: string;
  message: string;
  status_code: number;
}

export async function getStaticProps() {
  const { data } = await axios.get('https://culinar-ml.herokuapp.com')

  return {
    props: { ...data },
  }
}

const Home: NextPage<HomeProps> = ({ data, message, status_code }) => {
  return (
    <Container className='py-4'>
      <Head>
        <title>Culinar</title>
        <meta
          name="description"
          content="culinar.in is restaurant recommendation app powered by machine learning."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a
            href="https://culinar.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Culinar
          </a>
        </h1>
        <div className={styles.card}>
          <h2>API response</h2>
          <p className={styles.code}>
            {`data: ${data}
            message: ${message}
            status_code: ${status_code}`}
          </p>
        </div>
      </main>
    </Container>
  )
}

export default Home
