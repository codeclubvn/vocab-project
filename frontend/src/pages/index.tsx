import { Meta } from '@/components/common/Meta'
import { Main } from '@/layouts/Main'
import { useTodoQuery } from '@/utils/hooks'

const Index = () => {
  // const router = useRouter()
  const { data } = useTodoQuery()

  return (
    <Main
      meta={
        <Meta
          title='Next.js Boilerplate Presentation'
          description='Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.'
        />
      }
    >
      <h1>Hello World</h1>
      {JSON.stringify(data)}
    </Main>
  )
}

export default Index
