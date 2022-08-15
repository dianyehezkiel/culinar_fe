import { NextPage } from 'next'
import Image from 'next/image'
import Container from '../components/Container'
import styles from '../styles/pages/About.module.css'
import dianPic from '../public/dian_pic.jpg'
import ericPic from '../public/eric_pic.png'
import Head from 'next/head'

const About: NextPage = () => {
  return (
    <div className="wrapperFull">
      <Head>
        <title>About | Culinar</title>
      </Head>
      <Container className="py-4">
        <div className="logoWrapper mx-auto my-8">
          <h1 className="logo">Culinar</h1>
        </div>
        <div className={styles.imgFlexWrapper}>
          <div className={styles.imgWrapper}>
            <Image
              className="object-cover"
              src={ericPic}
              loading="lazy"
              alt={'picture of eric'}
              layout="fill"
            />
          </div>
          <div className={styles.imgWrapper}>
            <Image
              className="object-cover"
              src={dianPic}
              loading="lazy"
              alt={'picture of dian'}
              layout="fill"
            />
          </div>
        </div>
        <p className="mb-4">
          This is a side project from both{' '}
          <a
            className={styles.link}
            href="https://twitter.com/algonacci"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eric{' '}
          </a>
          and{' '}
          <a
            className={styles.link}
            href="https://twitter.com/dianyehezkiel_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dian{' '}
          </a>
          . There are so much things that can be improve such as location
          request, integration with food delivery apps, more restaurant data,
          skeleton loading etc.
        </p>
        <p>Please open a new pull request on our repo:</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <a
              className={styles.link}
              href="https://github.com/dianyehezkiel/culinar_fe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Culinar FE
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://github.com/algonacci/culinar_ml"
              target="_blank"
              rel="noopener noreferrer"
            >
              Culinar ML
            </a>
          </li>
        </ul>
        <p className="text-center">
          Support us on{' '}
          <a
            className={styles.link}
            href="https://saweria.co/openprojectsid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saweria
          </a>
        </p>
      </Container>
    </div>
  )
}

export default About
