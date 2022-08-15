import Container from "./Container"
import styles from "../styles/components/Footer.module.css"

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container className='text-center'>
        Created with 🔥 by{' '}
        <a
          href="https://twitter.com/algonacci"
          target='_blank'
          rel="noopener noreferrer"
        >
          Algonacci{' '}
        </a>
        (Data) &amp;{' '}
        <a
          href="https://twitter.com/dianyehezkiel_"
          target='_blank'
          rel="noopener noreferrer"
        >
          Dian Yehezkiel{' '}
        </a>
        (Web)
      </Container>
    </footer>
  )
}

export default Footer