'use client'

import ListLearnMode from '@/components/main/lessons/ListLearnMode'
import FlipCard from '@/components/main/lessons/FlipCard'

interface Props {
  params: {
    id: string
  }
}

export default function Page({ params }: Props) {
  return (
    <div className='container flex justify-center items-center flex-col py-10'>
      <div className='nav-card mb-[24px]'>
        <ListLearnMode lessonId={params.id} />
      </div>
      <FlipCard
        className='w-[814px] h-[428px]  rounded-lg shadow-xl '
        flipDirection='vertical'
        frontContent='viruses'
        afterContent='
          What is the Internet(1)? Which of the following descriptions below correspond to a "nuts-and-bolts" view of the Internet?
          What is the Internet(1)? Which of the following descriptions below correspond to a "nuts-and-bolts" view of the Internet?
          What is the Internet(1)? Which of the following descriptions below correspond to a "nuts-and-bolts" view of the Internet?
          a.A place I go for information, entertainment, and to communicate with people.
          b.
          A platform for building network applications.
          c.
          A "network of networks".
          d.
          A collection of hardware and software components executing protocols that define the format and the order of messages exchanged between two or more communicating entities, as well as the actions taken on the transmission and/or receipt of a message or other event.
          e.
          A collection of billions of computing devices, and packet switches interconnected by links.'
      />
    </div>
  )
}
