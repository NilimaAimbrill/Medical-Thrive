import React from 'react'
import Container from 'react-bootstrap/Container';
import styles from './HeroSection.module.css'

function HeroSection() {
  return (
    <Container className={styles.mainHero}>
        <div className={styles.heroHeading}>
            <h2>PREDICT THE TOP LOSER (for tomorrow) across these indices</h2>
        </div>
    </Container>
  )
}

export default HeroSection