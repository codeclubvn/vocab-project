'use client'

import { useRouter } from 'next/navigation'
import { Section } from '@radix-ui/themes'
import Button from '../ui/Button'

function SectionCallToAction() {
  const router = useRouter()

  return (
    <Section className='h-[100px] py-[80px] bg-[#f1ebeb] flex justify-center items-center'>
      <Button
        onClick={() => router.push('/signup')}
        className='px-[40px] '
      >
        Regiter Now
      </Button>
      <Button
        onClick={() => router.push('/support')}
        variant='outlineBlack'
        className='mx-2 border-2 border-solid border-black px-[40px] '
      >
        Support
      </Button>
    </Section>
  )
}

export default SectionCallToAction
