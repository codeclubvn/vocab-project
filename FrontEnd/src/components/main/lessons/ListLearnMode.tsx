import { BookCheck, Lightbulb } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Props {
  lessonId: string
}

const ListLearnMode = ({ lessonId }: Props) => {
  const router = useRouter()

  const staticLesson = [
    {
      id: 1,
      title: 'Flashcard',
      slug: '/learn-flashcard',
      icon: <Lightbulb />,
    },
    {
      id: 2,
      title: 'Quiz',
      slug: '/learn-quiz',
      icon: <BookCheck />,
    },
  ]

  return (
    <div className='link flex w-[814px]'>
      {staticLesson.map((item) => (
        <div
          key={item.id}
          onClick={() => router.push(`/lessons/${lessonId}/${item.slug}`)}
          role='link'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              router.push(`/lessons/${lessonId}/${item.slug}`)
            }
          }}
          className='cursor-pointer w-120 h-[52px] rounded-md shadow-xl bg-[#f1ebeb] mr-4 flex gap-3 items-center  py-2 px-3 w-1/4 hover:border-b-blue-400 hover:border-b-4 '
        >
          {item.icon}
          <div className=''>{item.title}</div>
        </div>
      ))}
    </div>
  )
}
export default ListLearnMode
