import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';
import planesData, { PlanData } from './Planes.data';
import { Link as ScrollLink } from "react-scroll";

function Planes() {

  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  return (
    <section id="Planes" className="bg-[url('/assets/fondo.png')] bg-cover h-[800px] bg-center">
      <div className="absolute inset-x-0  h-10 bg-gradient-to-t from-transparent to-black"></div>
      <PlanesContainer>
        <div className="container relative font-serif">
          <p className='uno font-Impact font-extrabold tracking-widest'>01</p>
          <h1 className='heading font-Impact tracking-wider'>ELEGÍ TU PROGRAMA</h1>
          <div className='swiper-wrapper'>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              spaceBetween={-100}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className='swiper_container'
              onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
            >
              {planesData.map((plan: PlanData, index: number) => {
                const distanceFromActive = Math.abs(index - activeSlideIndex);
                const isActive = distanceFromActive <= 0;
                let buttonClassName = ''

                switch(index) {
                  case 0: 
                    buttonClassName = 'button-on-image-primary';
                    break;
                  case 1: 
                    buttonClassName = 'button-on-image-secondary';
                    break;
                  case 2: 
                    buttonClassName = 'button-on-image-tertiary';
                    break;
                  case 3: 
                    buttonClassName = 'button-on-image-quaternary';
                    break;
                  default: 
                    buttonClassName = 'button-on-image-primary';
                    break;
                }

                return (
                <SwiperSlide key={plan.id} className={`swiper-slide${isActive ? ' active' : ''}`}>
                  <Card className={isActive ? '' : 'blur'}>
                    <div className='image-container font-Spartan'>
                    <img
                      src={plan.image}
                      alt={`Imagen ${plan.id}`}
                      className={isActive ? 'active-imege' : ''} 
                      />
                      <ScrollLink
                        to="Contacto"
                        spy={true}
                        smooth={true}
                        offset={45}
                        duration={500}
                          ><CustomButton className={`${buttonClassName}`}>EMPEZAR AHORA</CustomButton> </ScrollLink>
                    </div>
                  </Card>
                </SwiperSlide>
              )
                })}
            </Swiper>
          </div>
        </div>
      </PlanesContainer>
    </section>
  )
}

export default Planes;

const PlanesContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  
  .swiper_container {
    height: 40rem;
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
    position: relative;
    align-items: center;
  }

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-size: 1.6rem;
  overflow-x: hidden;
}

.container {
  max-width: 100%;
  padding: 5rem 0;
  margin: 0 auto;
  z-index: 1;
}

.uno {
  font-size: 7rem;
  z-index: 1;
  top: 1%;
  left: 35%;
  position: absolute;
  opacity: 0.2;
}

.heading {
  padding: 1rem 0;
  font-size: 1.8rem;
  text-align: center;
  z-index: 2;
}

.swiper-wrapper {
  margin: -100px;
  display: flex;
  align-items: center;
  margin-left: 0;
  left: auto;
  
}


.swiper-slide {
  width: 47rem;
  height: 12rem;
  left: center;
  position: relative;
  display: flex;
  justify-content: center;
}

.card {
  transition: filter 0.3s ease;
}

.blur {
  filter: blur(5px);

}
.active-imege {
  box-shadow: 10px 10px 50px rgb(0, 0, 0);
  transition: 0.3s;
}

.image-container {
  position: relative;
}


.button-on-image {
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2px 5px; 
}

.swiper-slide img {
  width: 25rem;
  height: 25rem; 
  object-fit: cover;
  transform: translateX(0);
}

@media (max-width: 500px) {
  .swiper_container {
    height: 60rem;
    left: -20px;
  }
  .swiper-slide {
    width: 25rem !important;
    left: 25px;
    height: 26rem !important;
  }
  .swiper-slide img {
    width: 20rem !important;
    height: 26rem !important;
  }
}

.swiper-slide img {
  width: 30rem;
  height: 30rem;
  object-fit: cover;
}

.swiper-slide.active img {
  filter: none;
}

.swiper-slide-shadow-left,
.swiper-slide-shadow-right {
  display: none;
}

.slider-controler {
  position: relative;
  bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-controler .swiper-button-next {
  left: 58% !important;
  transform: translateX(-58%) !important;
}

@media (max-width: 990px) {
  .slider-controler .swiper-button-next {
    left: 70% !important;
    transform: translateX(-70%) !important;
  }
}

@media (max-width: 450px) {
  .slider-controler .swiper-button-next {
    left: 80% !important;
    transform: translateX(-80%) !important;
  }
}

@media (max-width: 990px) {
  .slider-controler .swiper-button-prev {
    left: 30% !important;
    transform: translateX(-30%) !important;
  }
}

@media (max-width: 450px) {
  .slider-controler .swiper-button-prev {
    left: 20% !important;
    transform: translateX(-20%) !important;
  }
}

.slider-controler .slider-arrow {
  background: var(--white);
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  left: 42%;
  transform: translateX(-42%);
  filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
}

.slider-controler .slider-arrow ion-icon {
  font-size: 2rem;
  color: #222224;
}

.slider-controler .slider-arrow::after {
  content: '';
}

.swiper-pagination {
  position: relative;
  width: 15rem !important;
  bottom: 1rem;
}

.swiper-pagination .swiper-pagination-bullet {
  filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
}

.swiper-pagination .swiper-pagination-bullet-active {
  background: var(--primary);
}
`

const CustomButton = styled.button `
 border: 2px solid;
 cursor: pointer;
 position: absolute;
 bottom: -2px;
 left: 50%;
 transform: translate(-50%, -50%);
 padding: 1px 5px; 
 height: 36px;
 line-height: 33px;

 &.button-on-image-primary {
  border-color: #354092;
  @media (max-width: 500px) {
      width: 60%;
      height: 8%;
    }
    &:hover {
  background-color: #354092;
  transition: 0.3s
 }
}

 &.button-on-image-secondary {
    border-color: #4d3080;

    @media (max-width: 500px) {
      width: 60%;
      height: 8%;
    }
    &:hover {
  background-color: #4d3080;
  transition: 0.3s
 }
}

  &.button-on-image-tertiary {
    border-color: #651925;
    
    @media (max-width: 500px) {
      width: 60%;
      height: 8%;
    }
    &:hover {
  background-color: #651925;
  transition: 0.3s
 }
}

  &.button-on-image-quaternary {
    border-color: #c70404;
    
    @media (max-width: 500px) {
      width: 60%;
      height: 8%;
    }
    &:hover {
  background-color: #c70404;
  transition: 0.3s
 }
}

`