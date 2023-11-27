import FlipCard from '@/components/main/lessons/FlipCard'

export default function Page() {
  return (
    <>
      <div className='container bg-[#f6f7fb] pb-4'>
        {/* <div className='card-header pt-5 mb-4 w-1/2'>
          <div>
            <div className='route mb-4 text-sm'>Khoa hoc</div>
            <div className='route mb-4 text-sm'> Khoa hoc may tinh</div>
            <div className='title text-4xl inline-block'>
              <h2>Computer networks quiz 1</h2>
            </div>
          </div>
          <div className='p-3'>
            <div className='inline-block'>
              <Image
                src='/assets/icons/increase-up-profit-icon.svg'
                alt='flip-card-increase'
                width={6}
                height={6}
                className='inline-block w-3 h-3 mr-2 mb-1'
              />
              <span className='mr-4'>22 nguoi hoc trong 1 ngay qua</span>
            </div>
            <div className='inline-block'>
              <Image
                src='/assets/icons/star-full-icon.svg'
                alt='flip-card-star'
                width={6}
                height={6}
                className='inline-block w-3 h-3 mr-2 mb-1'
              />
              <span>Cho diem danh gia dau tien</span>
            </div>
          </div>
        </div> */}

        <div className='nav-card mb-[24px]'>
          <div className='link flex w-[814px]'>
            {/* <LinkCard
              href='/the-ghi-nho'
              className='flex gap-3 items-center  py-2 px-3 w-1/4 hover:border-b-blue-400 hover:border-b-4 '
            >
              <svg
                className='AssemblyIcon AssemblyIcon--large bg-amber-600 w-8 h-8 inline-block'
                role='presentation'
              >
                <noscript />
                <use
                  xlinkHref='#study-flashcards-twilight'
                  href='#study-flashcards-twilight'
                />
                <noscript />
              </svg>
              <div className=''>The ghi nho</div>
            </LinkCard>
            <LinkCard
              href='/the-ghi-nho'
              className='flex gap-3 items-center py-2 px-3 w-1/4 hover:border-b-blue-400 hover:border-b-4'
            >
              <svg
                className='AssemblyIcon AssemblyIcon--large bg-amber-600 w-8 h-8 inline-block'
                role='presentation'
              >
                <noscript />
                <use
                  xlinkHref='#study-flashcards-twilight'
                  href='#study-flashcards-twilight'
                />
                <noscript />
              </svg>
              <div className=''>The ghi nho</div>
            </LinkCard>
            <LinkCard
              href='/the-ghi-nho'
              className='flex gap-3 items-center py-2 px-3 w-1/4 hover:border-b-blue-400 hover:border-b-4'
            >
              <svg
                className='AssemblyIcon AssemblyIcon--large bg-amber-600 w-8 h-8 inline-block'
                role='presentation'
              >
                <noscript />
                <use
                  xlinkHref='#study-flashcards-twilight'
                  href='#study-flashcards-twilight'
                />
                <noscript />
              </svg>
              <div className=''>The ghi nho</div>
            </LinkCard>
            <LinkCard
              href='/the-ghi-nho'
              className='flex gap-3 items-center py-2 px-3 w-1/4 hover:border-b-blue-400 hover:border-b-4 mr-0'
            >
              <svg
                className='AssemblyIcon AssemblyIcon--large bg-amber-600 w-8 h-8 inline-block'
                role='presentation'
              >
                <noscript />
                <use
                  xlinkHref='#study-flashcards-twilight'
                  href='#study-flashcards-twilight'
                />
                <noscript />
              </svg>
              <div className=''>The ghi nho</div>
            </LinkCard> */}
          </div>
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
      {/* <Divider className='divider h-[1px] w-full bg-black mt-[71px]' /> */}
    </>
  )
}
