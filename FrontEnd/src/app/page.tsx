import { Theme } from '@radix-ui/themes'
import { SectionHome, SectionCallToAction, SectionFeedBack } from '@/components/layout/Section'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'

export default function Page() {
  return (
    <Theme>
      <Navbar />
      <div className='gap-navbar' />
      <SectionHome
        route='/signup'
        title='Magically transform your notes with AI'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a non numquam id dolorum accusantium unde voluptates ipsa eligendi! Quod, voluptates odit recusandae ipsam quos ratione temporibus officia commodi modi?'
        buttonTitle='Đăng ký ngay'
        image='/assets/images/example.jpg'
        imageClassName='w-full h-full '
      />
      <SectionHome
        route='/signup'
        isRightSide
        title='Tính Năng 1'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a non numquam id dolorum accusantium unde voluptates ipsa eligendi! Quod, voluptates odit recusandae ipsam quos ratione temporibus officia commodi modi?'
        buttonTitle='Đăng ký ngay'
        image='/assets/images/example.jpg'
      />
      <SectionHome
        route='/collections'
        title='Tính Năng 2'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a non numquam id dolorum accusantium unde voluptates ipsa eligendi! Quod, voluptates odit recusandae ipsam quos ratione temporibus officia commodi modi?'
        buttonTitle='Tạo bộ từ vựng'
        image='/assets/images/example.jpg'
      />
      <SectionHome
        route='/extensions'
        isRightSide
        title='Tính Năng 3'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a non numquam id dolorum accusantium unde voluptates ipsa eligendi! Quod, voluptates odit recusandae ipsam quos ratione temporibus officia commodi modi?'
        buttonTitle='Cài đặt extension'
        image='/assets/images/example.jpg'
      />
      <SectionFeedBack />
      <SectionCallToAction />
      <Footer />
    </Theme>
  )
}
