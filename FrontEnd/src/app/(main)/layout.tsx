import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <section className='h-[40%]'>{children}</section>
      <Footer />
    </>
  )
}
