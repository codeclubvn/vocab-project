'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { Heading } from '@radix-ui/themes'
import { FeedbackData } from '@/types/Static'
import CardFeedBack from './CardFeedBack'
import 'swiper/css'
import 'swiper/css/navigation'

function SectionFeedBack() {
  const feedbackData: FeedbackData[] = [
    {
      title: 'Người Dùng 1',
      description:
        'Absolutely excellent. Easy to use, much more visually pleasant than Cram and no rudimentary features are behind a paywall. It’s simply excellent.',
      image: '/assets/images/example.jpg',
    },
    {
      title: 'Người Dùng 2',
      description:
        'Absolutely excellent. Easy to use, much more visually pleasant than Cram and no rudimentary features are behind a paywall. It’s simply excellent.',
      image: '/assets/images/example.jpg',
    },
    {
      title: 'Người Dùng 3',
      description:
        'Absolutely excellent. Easy to use, much more visually pleasant than Cram and no rudimentary features are behind a paywall. It’s simply excellent.',
      image: '/assets/images/example.jpg',
    },
    {
      title: 'Người Dùng 4',
      description:
        'Absolutely excellent. Easy to use, much more visually pleasant than Cram and no rudimentary features are behind a paywall. It’s simply excellent.',
      image: '/assets/images/example.jpg',
    },
    {
      title: 'Người Dùng 5',
      description:
        'Absolutely excellent. Easy to use, much more visually pleasant than Cram and no rudimentary features are behind a paywall. It’s simply excellent.',
      image: '/assets/images/example.jpg',
    },
  ]

  return (
    <div className='my-4 '>
      <Heading
        as='h1'
        align='center'
        className='py-8'
      >
        Đánh giá từ người dùng
      </Heading>
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
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {feedbackData.map((feedback, index) => {
          return (
            <SwiperSlide key={index}>
              <CardFeedBack
                className={feedback.className}
                title={feedback.title}
                description={feedback.description}
                image={feedback.image}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SectionFeedBack
