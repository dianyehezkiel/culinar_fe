import styles from '../styles/components/Card.module.css'
import { classNames } from '../utils'

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={classNames(
        styles.card,
        className ? className : "",
      )}>
        {children}
      </div>
    </div>
  )
}

export default Card
