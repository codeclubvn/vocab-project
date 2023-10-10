import { Theme } from '@radix-ui/themes';
import { Navbar } from "@/components/layout/Navbar"
import { SectionHome, SectionCallToAction, SectionFeedBack } from "@/components/layout/Section"
import { Footer } from "@/components/layout/Footer"

export default function Page() {
  return <>
    <Theme>
      <Navbar />
      <div className='mt-[var(--navbar-height)] mb-[8rem] md:mb-[0rem]' />
      <SectionHome
        route='/signup'
        title='Magically transform your notes with AI'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a non numquam id dolorum accusantium unde voluptates ipsa eligendi! Quod, voluptates odit recusandae ipsam quos ratione temporibus officia commodi modi?'
        buttonTitle='Đăng ký ngay'
        image='https://ksr-ugc.imgix.net/assets/025/867/455/c9e6c72592a0c2daff268afb45d604d7_original.png?ixlib=rb-4.1.0&crop=faces&w=1552&h=873&fit=crop&v=1563593007&auto=format&frame=1&q=92&s=035154de01cf39f862fe61fb730735dd'
        imageClassName='w-full h-[430px] object-cover'
      />
      <SectionHome
        route='/signup'
        isRightSide={true}
        title='Tính Năng 1'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a non numquam id dolorum accusantium unde voluptates ipsa eligendi! Quod, voluptates odit recusandae ipsam quos ratione temporibus officia commodi modi?'
        buttonTitle='Đăng ký ngay'
        image='https://ksr-ugc.imgix.net/assets/025/867/455/c9e6c72592a0c2daff268afb45d604d7_original.png?ixlib=rb-4.1.0&crop=faces&w=1552&h=873&fit=crop&v=1563593007&auto=format&frame=1&q=92&s=035154de01cf39f862fe61fb730735dd'
      />
      <SectionHome
        route='/collections'
        title='Tính Năng 2'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a non numquam id dolorum accusantium unde voluptates ipsa eligendi! Quod, voluptates odit recusandae ipsam quos ratione temporibus officia commodi modi?'
        buttonTitle='Tạo bộ từ vựng'
        image='https://ksr-ugc.imgix.net/assets/025/867/455/c9e6c72592a0c2daff268afb45d604d7_original.png?ixlib=rb-4.1.0&crop=faces&w=1552&h=873&fit=crop&v=1563593007&auto=format&frame=1&q=92&s=035154de01cf39f862fe61fb730735dd'
      />
      <SectionHome
        route='/extensions'
        isRightSide={true}
        title='Tính Năng 3'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a non numquam id dolorum accusantium unde voluptates ipsa eligendi! Quod, voluptates odit recusandae ipsam quos ratione temporibus officia commodi modi?'
        buttonTitle='Cài đặt extension'
        image='https://ksr-ugc.imgix.net/assets/025/867/455/c9e6c72592a0c2daff268afb45d604d7_original.png?ixlib=rb-4.1.0&crop=faces&w=1552&h=873&fit=crop&v=1563593007&auto=format&frame=1&q=92&s=035154de01cf39f862fe61fb730735dd'
      />
      <SectionFeedBack />
      <SectionCallToAction />
      <Footer />
    </Theme>
  </>
}