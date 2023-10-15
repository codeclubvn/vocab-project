import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='container py-10 flex justify-between items-center'>
      <div className='p-4'>
        <h1>@Copyright 2023</h1>
      </div>
      <div className='p-4 flex items-center'>
        <Image
          src='/assets/icons/facebook.svg'
          width={20}
          height={20}
          alt='Notion'
          className='mr-4'
        />
        <Image
          src='/assets/icons/twitter.svg'
          width={20}
          height={20}
          alt='Notion'
          className='mr-4'
        />
        <Image
          src='/assets/icons/notion.svg'
          width={20}
          height={20}
          alt='Notion'
          className='mr-4'
        />
      </div>
    </footer>
  )
}

export default Footer
