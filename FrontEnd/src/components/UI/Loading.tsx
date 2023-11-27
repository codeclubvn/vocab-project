'use client'

import { Loader2 } from 'lucide-react'

const Loading = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70'>
      <Loader2
        size={80}
        strokeWidth={1.5}
        className='text-accent animate-spin'
      />
    </div>
  )
}

export default Loading
