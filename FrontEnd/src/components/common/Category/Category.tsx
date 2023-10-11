import { InputSignUp } from "../Input";


export default function Category(){

    const category = ['Tất cả', 'TA Đi làm', 'TA Giao tiếp', 'Tham gia thi lấy chứng chỉ', 'TA du lịch', 'Khác']

    return (
        <>
            <h2>CATEGORY</h2>
            {category.map(ele => (
                <div className="my-10 flex items-center">
                    <InputSignUp
                        className='mr-4 w-5 h-5 inline-block text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500'
                        type='checkbox'
                    />
                    <span className='ml-4'>{ele}</span>
                </div>
            ))}
        </>
    )
}