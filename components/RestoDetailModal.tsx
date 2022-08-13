import { StarIcon, XIcon } from '@heroicons/react/outline'
import styles from '../styles/components/RestoDetailModal.module.css'
import { Restaurant } from '../types'
import { classNames } from '../utils'
import React from 'react'
import ImageWithFallback from './ImageWithFallback'

interface RestoDetailModalProps {
  isOpen: boolean;
  handleClose: () => void;
  restaurant?: Restaurant;
}

const RestoDetailModal: React.FC<RestoDetailModalProps> = ({
  isOpen,
  handleClose,
  restaurant,
}) => {

  return (
    <div
      className={classNames(
        isOpen ? 'translate-y-0' : 'translate-y-full delay-500',
        styles.modalWrapper,
      )}
    >
      <div
        className={classNames(
          isOpen ? 'opacity-100 delay-75' : 'opacity-0 delay-300',
          styles.modalBlurSection,
        )}
        onClick={handleClose}
      >
        <div
          className={classNames(
            isOpen ? 'translate-y-0 delay-150' : 'translate-y-[100vh]',
            styles.modal,
            )}
        >
          <div className={styles.titleBar}>
            <p className={styles.title}>{restaurant?.name}</p>
            <button
              onClick={handleClose}
              className={styles.closeButton}
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <div className={styles.detailImage}>
                <ImageWithFallback
                  src={restaurant?.image_url}
                  alt={`resto picture`}
                />
                <div className={styles.detailRating}>
                    <p className='text-lg'>{restaurant?.rating}</p>
                    <StarIcon className="w-5 h-5 fill-white" />
                </div>
              </div>
              <div className={styles.twoColTextWrapper}>
                <div className={styles.firstColText}>
                  <p>Cuisine</p>
                </div>
                <div className={styles.secondColText}>
                  <p>: {restaurant?.cuisine.trim()}</p>
                </div>
              </div>
              <div className={styles.twoColTextWrapper}>
                <div className={styles.firstColText}>
                  <p>Average price</p>
                </div>
                <div className={styles.secondColText}>
                  <p>: Rp. {restaurant?.average_price.toLocaleString('id')}</p>
                </div>
              </div>
              <div className={styles.twoColTextWrapper}>
                <div className={styles.firstColText}>
                  <p>Address</p>
                </div>
                <div className={styles.secondColText}>
                  <p>
                    : {restaurant?.address.trim()}
                  </p>
                </div>
              </div>
              <div className={styles.detailMap}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestoDetailModal
