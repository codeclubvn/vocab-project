'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import Link from 'next/link'
import { LandingData } from '@/types/Static'
import Image from '../ui/Image'
import 'swiper/css'
import 'swiper/css/navigation'

interface Props {
  listCarousel: LandingData[]
}

function Carousel({ listCarousel }: Props) {
  return (
    <div className='relative w-full '>
      <Swiper
        navigation
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        slidesPerGroup={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
      >
        {listCarousel.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link
                href={item.href}
                prefetch={false}
              >
                <Image
                  fill
                  src={item.src}
                  alt={item.title}
                  ratio={16 / 9}
                  className='h-[400px] py-[80px] lg:py-0 '
                />
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Carousel
