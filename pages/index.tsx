import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'
import Container from '../components/Container'
import { moods } from '../lib/constants'
import styles from '../styles/pages/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='wrapperFull'>
      <Head>
        <title>Culinar</title>
        <meta
          name="description"
          content="culinar.in is restaurant recommendation app powered by machine learning."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className={styles.main}>
        <div className={styles.headerWrapper}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Culinar</h1>
          </div>
          <p className={styles.tagline}>
            Restaurant recommendation based on your mood
          </p>
        </div>
        <div className={styles.moodListWrapper}>
          <h2 className={styles.moodListInstruction}>
            Start by choosing your current mood
          </h2>
          <div className={styles.moodList}>
            {Object.keys(moods).map((mood) => (
              <Link key={mood} href={`/moods/${mood}`}>
                <div>
                  <Card className={styles.moodCard}>
                    <p className={styles.moodIcon}>{moods[mood]}</p>
                    <p>{mood}</p>
                  </Card>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
