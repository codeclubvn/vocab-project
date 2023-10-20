'use client'

import Image from 'next/image'
import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

interface FlipCardProps {
  className: string
  flipDirection: 'horizontal' | 'vertical'
  frontContent: string
  afterContent: string
}

const FlipCard = (props: FlipCardProps) => {
  const [flip, setFlip] = useState(false)

  const handleOnClick = () => setFlip((preState) => !preState)
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      setFlip((preState) => !preState)
    }
  }

  return (
    <ReactCardFlip
      isFlipped={flip}
      flipDirection={`${props.flipDirection}`}
    >
      <div
        className={`flex flex-col ${props.className} py-6 px-8 bg-[#ffffff] overflow-y-auto`}
        onClick={handleOnClick}
        onKeyPress={handleOnKeyPress}
        role='button'
        tabIndex={0}
      >
        <div className='flex items-center justify-between header-flip-card '>
          <div className='clue flex items-center gap-2 w-fit p-2'>
            <Image
              src='/assets/icons/bulb-light-icon.svg'
              alt='Login with google'
              width={6}
              height={6}
              className='inline-block w-6 h-6 mr-2 mb-1'
            />
            <span>Hien thi goi y</span>
          </div>

          <div className='flex items-center justify-center gap-1 w-fit p-2'>
            <div className='hover:bg-slate-400 w-8 h-8 text-center pt-1 pl-2 rounded-full'>
              <Image
                src='/assets/icons/sound-full-icon.svg'
                alt='Login with google'
                width={3}
                height={3}
                className='inline-block w-4 h-4 mt-1 mr-2 mb-1'
              />
            </div>
            <div className='hover:bg-slate-400 w-8 h-8 text-center pt-1 pl-2 rounded-full'>
              <Image
                src='/assets/icons/star-full-icon.svg'
                alt='Login with google'
                width={3}
                height={3}
                className='inline-block w-4 h-4 mr-2 mb-1'
              />
            </div>
          </div>
        </div>
        <p className='flex-1 text-center text-2xl overflow-y-auto'>{props.frontContent}</p>
      </div>
      <div
        className={`flex flex-col min-h-full ${props.className} py-6 px-8 bg-[#ffffff] `}
        onClick={handleOnClick}
        onKeyPress={handleOnKeyPress}
        role='button'
        tabIndex={0}
      >
        <div className='flex items-center justify-between header-flip-card '>
          <div className='clue flex items-center gap-2 w-fit p-2'>
            <Image
              src='/assets/icons/bulb-light-icon.svg'
              alt='Login with google'
              width={6}
              height={6}
              className='inline-block w-6 h-6 mr-2 mb-1'
            />
            <span>Hien thi goi y</span>
          </div>

          <div className='flex items-center justify-center gap-1 w-fit p-2'>
            <div className='hover:bg-slate-400 w-8 h-8 text-center pt-1 pl-2 rounded-full'>
              <Image
                src='/assets/icons/sound-full-icon.svg'
                alt='Login with google'
                width={3}
                height={3}
                className='inline-block w-4 h-4 mt-1 mr-2 mb-1'
              />
            </div>
            <div className='hover:bg-slate-400 w-8 h-8 text-center pt-1 pl-2 rounded-full'>
              <Image
                src='/assets/icons/star-full-icon.svg'
                alt='Login with google'
                width={3}
                height={3}
                className='inline-block w-4 h-4 mr-2 mb-1'
              />
            </div>
          </div>
        </div>
        <p className='flex-1 w-full text-2xl overflow-y-auto'>{props.afterContent}</p>
      </div>
    </ReactCardFlip>
  )
}

export default FlipCard
