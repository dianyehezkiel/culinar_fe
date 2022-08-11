import Link from 'next/link'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import styles from '../styles/components/Navbar.module.css'
import Container from './Container'
import { classNames } from '../utils'
import React from 'react'

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const openDrawer = () => {
    setDrawerOpen(true)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <Container className="relative h-full flex items-center justify-between">
        <Link href='/'>
          <h1 className={styles.textLogo}>Culinar</h1>
        </Link>
        <div className={styles.desktopMenu}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className={styles.mobileMenu}>
          <button className={styles.iconButton} onClick={openDrawer}>
            <MenuIcon />
          </button>
        </div>
        <div
          className={classNames(
            drawerOpen ? 'translate-x-0' : 'translate-x-full delay-500',
            styles.drawerWrapper,
          )}
        >
          <div
            className={classNames(
            drawerOpen? 'opacity-100 delay-75' : 'opacity-0 delay-300',
            styles.drawerBlurSection,
            )}
            onClick={closeDrawer}
          >
            <div
              className={classNames(
                drawerOpen ? 'translate-x-0 delay-150' : 'translate-x-full',
                styles.drawer,
                )}
            >
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/about">
                <a>About</a>
              </Link>
              <button
                className={`${styles.iconButton} absolute top-2 right-4`}
                onClick={closeDrawer}
              >
                <XIcon />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
