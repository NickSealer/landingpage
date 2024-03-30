import React from 'react'
import '../styles/body.css'
import { Card } from './Card'
import { Description } from './Description'
import { Features } from './Features'

export const Body = () => {
  return (
    <div className='body'>
      <div className='content'>
        <div className='content-left'>
          <Features />
        </div>
        <div className='content-right'>
          <Description />
        </div>
      </div>
      <br />
      <div className='content'>
        <Card id='motor' src='https://www.carscoops.com/wp-content/uploads/2018/12/5862586a-ferrari-enzo-00.jpg' />
        <Card id='brakes' src='https://media.cdnws.com/_i/46016/m840-3440/3015/44/stickers-etrier-de-frein-ferrari-ref3-enzo-autocollant-etriers-freins-logo-voiture-sticker-adhesif-auto-car-disque-plaquette-pneu-jantes-racing-tuning-sponsors-sport-min.jpeg' />
        <Card id='performance' src='https://i.pinimg.com/736x/ab/e3/3b/abe33bffb0e21985c88bb6a742f36cbb.jpg' />
      </div>
    </div>
  )
}
