"use client"
import { CardFeedBack } from '@/components/common/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function SectionFeedBack() {
  return (
    <section className='my-4 p-4 relative w-full border-t-[1px] border-solid border-[#646464]'>
      <h1 className='uppercase font-medium text-center my-[3.5rem] text-[1.5rem]'>Đánh giá từ người dùng</h1>
      <Swiper
        navigation={true} modules={[Navigation, Autoplay]}
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
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
        <SwiperSlide className='flex items-start justify-center'>
          <CardFeedBack
            title='Người Dùng 1'
            description='Absolutely excellent. Easy to use, much more visually pleasant than Cram and no rudimentary features are behind a paywall. It’s simply excellent.'
            image='https://firegroup.io/wp-content/uploads/2023/07/34625248our-mission.jpg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-start justify-center'>
          <CardFeedBack
            title='Người Dùng 2'
            description='Absolutely excellent. Easy to use, much more visually pleasant than Cram and no rudimentary features are behind a paywall. It’s simply excellent.'
            image='https://firegroup.io/wp-content/uploads/2023/07/34625248our-mission.jpg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-start justify-center'>
          <CardFeedBack
            title='Người Dùng 3'
            description='Absolutely excellent. Easy to use, much more visually pleasant than Cram and no rudimentary features are behind a paywall. It’s simply excellent.'
            image='https://firegroup.io/wp-content/uploads/2023/07/34625248our-mission.jpg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-start justify-center'>
          <CardFeedBack
            title='Người Dùng 4'
            description='Absolutely excellent. Easy to use, much more visually pleasant than Cram and no rudimentary features are behind a paywall. It’s simply excellent.'
            image='https://firegroup.io/wp-content/uploads/2023/07/34625248our-mission.jpg'
          />
        </SwiperSlide>
        <SwiperSlide className='flex items-start justify-center'>
          <CardFeedBack
            title='Người Dùng 5'
            description='Absolutely excellent. Easy to use, much more visually pleasant than Cram and no rudimentary features are behind a paywall. It’s simply excellent.'
            image='https://firegroup.io/wp-content/uploads/2023/07/34625248our-mission.jpg'
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default SectionFeedBack