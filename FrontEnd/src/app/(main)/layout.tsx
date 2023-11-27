import Navbar from '@/components/UI/Navbar'
import Footer from '@/components/UI/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <section className='h-[40%]'>{children}</section>
      <Footer />
    </>
  )
}
