import Footer from '@/components/ui/Footer'
// import { ThemePanel } from '@radix-ui/themes'
import Navbar from '@/components/ui/Navbar'
import SectionFeedBack from '@/components/landing/SectionFeedBack'
import SectionCallToAction from '@/components/landing/SectionCallToAction'
import SectionHome from '@/components/landing/SectionHome'
import Carousel from '@/components/landing/Carousel'
import { LandingData } from '@/types/Static'

export default function Page() {
  const landingData: LandingData[] = [
    {
      title: 'Create Flashcard lesson',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aspernatur voluptates consequuntur obcaecati, consectetur eveniet, recusandae in, optio suscipit reiciendis cum? Et, tempore accusamus nulla illo debitis neque delectus obcaecati.',
      href: '/signup',
      src: '/assets/images/example.jpg',
      isRightSide: true,
      buttonTitle: 'Signup',
    },
    {
      title: 'Learn with Quiz',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aspernatur voluptates consequuntur obcaecati, consectetur eveniet, recusandae in, optio suscipit reiciendis cum? Et, tempore accusamus nulla illo debitis neque delectus obcaecati.',
      href: '',
      src: '/assets/images/example.jpg',
      isRightSide: false,
      buttonTitle: 'Signup',
    },
    {
      title: 'Learn with matching card',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aspernatur voluptates consequuntur obcaecati, consectetur eveniet, recusandae in, optio suscipit reiciendis cum? Et, tempore accusamus nulla illo debitis neque delectus obcaecati.',
      href: '/signup',
      src: '/assets/images/example.jpg',
      isRightSide: true,
      buttonTitle: 'Signup',
    },
  ]

  return (
    <>
      <Navbar />
      <Carousel listCarousel={landingData} />
      {landingData.map((item, index) => {
        return (
          <SectionHome
            key={index}
            title={item.title}
            description={item.description}
            href={item.href}
            src={item.src}
            isRightSide={item.isRightSide}
            buttonTitle={item.buttonTitle}
          />
        )
      })}
      <SectionFeedBack />
      <SectionCallToAction />
      <Footer />
      {/* <ThemePanel /> */}
    </>
  )
}
