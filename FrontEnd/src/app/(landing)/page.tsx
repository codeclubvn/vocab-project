import Footer from '@/components/UI/Footer'
// import { ThemePanel } from '@radix-ui/themes'
import Navbar from '@/components/UI/Navbar'
import LandingSectionFeedBack from '@/components/Landing/LandingSectionFeedBack'
import LandingSectionCallToAction from '@/components/Landing/LandingSectionCallToAction'
import LandingSectionHome from '@/components/Landing/LandingSectionHome'
import LandingCarousel from '@/components/Landing/LandingCarousel'
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
      <LandingCarousel listLandingCarousel={landingData} />
      {landingData.map((item, index) => {
        return (
          <LandingSectionHome
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
      <LandingSectionFeedBack />
      <LandingSectionCallToAction />
      <Footer />
      {/* <ThemePanel /> */}
    </>
  )
}
