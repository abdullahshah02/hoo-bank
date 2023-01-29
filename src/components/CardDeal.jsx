import React from 'react'
import styles, {layout} from '../styles'
import { card } from '../assets'
import Button from './Button'

const CardDeal = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>Find a better card deal <br className='sm:block hidden' /> in a few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>Our comparison tool helps you find the best card deals based on your spending habits and credit score. Our algorithm considers your unique spending patterns and credit score to recommend cards that fit your needs.</p>
        <Button styles='mt-10'/>
      </div>

      <div className={layout.sectionImgReverse}>
        <img src={card} alt='billing' className='w-[100%] h-[100%] z-[5] relative' />
      </div>
    </section>
  )
}

export default CardDeal