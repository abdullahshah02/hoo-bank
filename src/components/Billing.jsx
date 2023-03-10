import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../styles'

const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt='billing' className='w-[100%] h-[100%] z-[5] relative' />

        <div className='absolute z-[3] -left-2/3 top-0 w-[60%] h-[60%] rounded-full white__gradient opacity-50' />
        <div className='absolute z-[0] -left-2/3 bottom-0 w-[60%] h-[60%] rounded-full pink__gradient opacity-50' />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}> Easily control your <br className='sm:block hidden' /> billing and invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          You can handle the invoicing through our top of the line and easy to use dashboard. It's extremely easy to use!
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt='apple_store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt='google_play' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
        </div>
      </div>

    </section>

  )
}

export default Billing