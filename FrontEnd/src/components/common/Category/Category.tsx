'use client'
import { useState } from 'react'
import { InputSignUp } from '../Input'

interface CategoryProps extends React.ComponentProps<'div'> {
  className?: string
}

export default function Category(props: CategoryProps) {
  const Catalogues = ['TA Đi làm', 'TA Giao tiếp', 'Tham gia thi lấy chứng chỉ', 'TA du lịch', 'Khác']

  const [isCheckAll, setIsCheckAll] = useState(false)
  const [isCheck, setIsCheck] = useState<(string | undefined)[]>([])


  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll)

    setIsCheck(Catalogues.map((_, idx) => idx.toString()))
    if (isCheckAll) {
      setIsCheck([])
    }
  }

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  

  const category = Catalogues.map((name, idx) => {
    return (
      <div className='my-5 flex items-center'>
        <InputSignUp
          key={idx}
          className='mr-2 w-5 h-5 inline-block text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500'
          type='checkbox'
          id={idx.toString()}
          onChange={handleClick}
          checked={isCheck.includes(idx.toString())}
        />
        <span className='ml-4 mt-1'>{name}</span>
      </div>
    )
  })

  return (
    <div className={props.className}>
      <h2 className='text-2xl'>CATEGORY</h2>
      <div className='my-5 flex items-center'>
        <InputSignUp
          className='mr-2 w-5 h-5 inline-block text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500'
          type='checkbox'
          onChange={handleSelectAll}
          checked={isCheckAll}
        />
        <span className='ml-4 mt-1'>Tất cả</span>
      </div>
      {category}
    </div>
  )
}
