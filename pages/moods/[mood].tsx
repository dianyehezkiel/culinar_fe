import { StarIcon } from "@heroicons/react/outline"
import { NextPage } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import Card from "../../components/Card"
import Container from "../../components/Container"
import restoFallback from "../../public/resto_fallback.png"
import styles from "../../styles/pages/[mood].module.css"

interface MoodProps {
  name: string;
  desc: string;
  rating: number;
}

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export async function getServerSideProps() {
  const data = {
    name: "Lorem ipsum dolor",
    desc: `Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. 
      Ut et massa mi. 
      Aliquam in hendrerit urna.
      Pellentesque sit amet sapien fringilla,
      mattis ligula consectetur, ultrices mauris.`,
    rating: 4.5,
  }

  return {
    props: {...data},
  }
}

const Mood: NextPage<MoodProps> = ({ name, desc, rating }) => {
  const router = useRouter()
  const { mood } = router.query

  return (
    <div className='wrapperFull'>
      <Container className='py-8 text-center'>
        <h2 className={styles.headerText}>
          {`here are the best restaurants when you feel ${mood}`}
        </h2>
        <div className={styles.restoList}>
          {numArr.map((num) => (
            <Card key={num} className="rounded-2xl w-64 p-2 gap-2">
              <div className={styles.cardImg}>
                <Image
                  className="object-cover"
                  src={restoFallback}
                  alt={`${name} picture`}
                  layout='fill'
                />
                <div className={styles.cardRating}>
                  <p>{rating}</p>
                  <StarIcon className="w-3 h-3 fill-white" />
                </div>
              </div>
              <div className={styles.cardTitle}>
                <p>{name}</p>
              </div>
              <div className={styles.cardDesc}>
                <p>{desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Mood