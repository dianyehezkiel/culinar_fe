import { XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { foods, moods } from '../lib/constants'
import { classNames } from '../utils'
import styles from '../styles/components/HelpForm.module.css'
import axios from 'axios'

interface Inputs {
  mood: string;
  favorite_food: string;
}

const HelpForm: React.FC = () => {
  const { register, handleSubmit, watch } = useForm<Inputs>()
  const [confirmOpen, setConfirmOpen] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmitted(true)
    await axios.post('/api/post_form', { ...data })
  }

  const openConfirm = () => {
    setConfirmOpen(true)
  }

  const closeConfirm = () => {
    setConfirmOpen(false)
    setSubmitted(false)
  }

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <label className="text-lg" htmlFor="mood">
          How do you feel now?
        </label>
        <select
          className="h-8 border border-black rounded"
          defaultValue={'happy'}
          {...register('mood')}
        >
          {Object.keys(moods).map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
        <label className="mt-2 text-lg" htmlFor="favorite_food">
          What cuisine are you craving now?
        </label>
        <select
          className="h-8 border border-black rounded"
          {...register('favorite_food')}
        >
          {foods.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
        <div className="mt-2 self-end rounded bg-black">
          <button
            className={`${styles.formButton} bg-softCyan`}
            type="button"
            onClick={openConfirm}
          >
            Submit
          </button>
        </div>
      </form>
      <div
        className={classNames(
          styles.confirmationModalWrapper,
          confirmOpen ? 'translate-y-0' : '-translate-y-full delay-150',
        )}
      >
        <div
          className={classNames(
            styles.confirmationBlurSection,
            confirmOpen ? 'opacity-100 delay-75' : 'opacity-0 delay-75',
          )}
        >
          <div className="relative max-w-[24rem]">
            <div
              className={classNames(
                styles.confirmationModal,
                confirmOpen && !submitted ? 'scale-100 delay-150' : 'scale-0',
              )}
            >
              <div className={styles.titleBar}>
                <button
                  className="absolute top-0 right-0"
                  onClick={closeConfirm}
                >
                  <XIcon className="w-6 h-6 m-1" />
                </button>
                <p>Confirm Submit</p>
              </div>
              <div className="p-2">
                <p>
                  You like <b>{watch('favorite_food')}</b>{' '}
                  cuisine when you are{' '}
                  <b>{watch('mood')}</b>.
                </p>
                <p>Is that correct?</p>
              </div>
              <div className="m-4 flex items-center justify-center gap-8">
                <div className="mt-2 rounded bg-black">
                  <button
                    className={`${styles.formButton} bg-softGreen`}
                    onClick={handleSubmit(onSubmit)}
                  >
                    Yes
                  </button>
                </div>
                <div className="mt-2 rounded bg-black">
                  <button
                    className={`${styles.formButton} bg-softRed`}
                    onClick={closeConfirm}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
            <div
              className={classNames(
                'absolute top-0',
                styles.confirmationModal,
                confirmOpen && submitted ? 'scale-100 delay-150' : 'scale-0',
              )}
            >
              <div className={styles.titleBar}>
                <button
                  className="absolute top-0 right-0"
                  onClick={closeConfirm}
                >
                  <XIcon className="w-6 h-6 m-1" />
                </button>
                <p>Confirm Finish</p>
              </div>
              <div className="p-2">
                <p>Do you want to submit another cuisine?</p>
              </div>
              <div className="m-4 flex items-center justify-center gap-8">
                <div className="mt-2 rounded bg-black">
                  <button
                    className={`${styles.formButton} bg-softGreen`}
                    onClick={closeConfirm}
                  >
                    Yes
                  </button>
                </div>
                <div className="mt-2 rounded bg-black">
                  <Link href="/">
                    <a
                      className={`${styles.formButton} inline-block bg-softRed`}
                      onClick={closeConfirm}
                    >
                      No
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpForm
