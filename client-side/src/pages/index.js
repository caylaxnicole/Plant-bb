import React from 'react'
import { withSiteData } from 'react-static'
import { Carousel, Button } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'
import plant1 from '../img/plant1.jpeg'
import plantNursery from '../img/Plant-Nursery-Vector.jpg'

export default withSiteData(() => (
  <div style={{ textAlign: 'center' }}>
    <div className='bg-img'>
      <h1>Plant bb</h1>
      <div className='hero-image'>
      <Carousel>
        <Carousel.Item className='c-slides'>
          <Carousel.Caption>
            <img src={plant1} alt='plant 1'/>
            <h3>A fun reminder to water your plants!</h3>
            <p>Customize your virtual plant and earn rewards when you keep it alive.</p>
            <Button href="/sign-up" variant="outline-dark" size="lg">
               Sign-Up here
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='c-slides'>
          <Carousel.Caption>
            <img src={plantNursery} alt='guy watering plant'/>
            <h3>Get email reminders!</h3>
            <p>Set up an automatic email blast as a reminder to water your plant bbs at home.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  </div>
))
