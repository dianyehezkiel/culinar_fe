import { StarIcon } from '@heroicons/react/outline'
import axios from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Card from '../../components/Card'
import Container from '../../components/Container'
import ImageWithFallback from '../../components/ImageWithFallback'
import RestoDetailModal from '../../components/RestoDetailModal'
import { toRestaurants } from '../../lib/utils'
import styles from '../../styles/pages/[mood].module.css'
import { Restaurant, RestaurantsFromApi } from '../../types'

type MoodProps = {
  [key: string]: Restaurant;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context

  const { data: dataFromApi } = await axios.post(
    'https://culinar-ml.herokuapp.com/find',
    params,
  )

  const restaurantsFromApi: RestaurantsFromApi = {
    ...dataFromApi.data.restaurants,
  }

  const data = toRestaurants(restaurantsFromApi)
  return {
    props: { ...data },
  }
}

const Mood: NextPage<MoodProps> = (props: MoodProps) => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [selectedResto, setSelectedResto] = React.useState<
    Restaurant | undefined
  >()
  const router = useRouter()
  const { mood } = router.query

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const selectResto = (resto: Restaurant) => {
    setSelectedResto(resto)
  }

  const handleCardClick = (resto: Restaurant) => {
    selectResto(resto)
    openModal()
  }

  return (
    <div className="wrapperFull">
      <Container className="py-8 text-center">
        <h2 className={styles.headerText}>
          {`here are the best restaurants when you feel ${mood}`}
        </h2>
        <div className={styles.restoList}>
          {Object.keys(props).map((r) => (
            <div key={r} onClick={() => handleCardClick(props[r])}>
              <Card className="rounded-2xl w-64 h-[254px] p-2 gap-2">
                <div className={styles.cardImg}>
                  <ImageWithFallback
                    src={props[r].image_url}
                    alt={`${props[r].name} picture`}
                  />
                  <div className={styles.cardRating}>
                    <p>{props[r].rating}</p>
                    <StarIcon className="w-3 h-3 fill-white" />
                  </div>
                </div>
                <div className={styles.cardTitle}>
                  <p>{props[r].name.trim()}</p>
                </div>
                <div className={styles.cardDesc}>
                  <p>{props[r].address.trim()}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
      <RestoDetailModal
        isOpen={modalOpen}
        handleClose={closeModal}
        restaurant={selectedResto}
      />
    </div>
  )
}

export default Mood
