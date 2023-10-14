
interface CardCourseProps extends React.ComponentProps<'div'> {
    title: string,
    numberOf : number,
    author: string,
    className?: string
}

export default function CardCourse(props: CardCourseProps){

    return (
        <div className={`flex mb-4 ${props.className}`}>
            <img className="w-52 mr-8" src="https://ksr-ugc.imgix.net/assets/025/867/455/c9e6c72592a0c2daff268afb45d604d7_original.png?ixlib=rb-4.1.0&crop=faces&w=1552&h=873&fit=crop&v=1563593007&auto=format&frame=1&q=92&s=035154de01cf39f862fe61fb730735dd" alt="logoCourse" />
            <div className="card-content basis-1/2">
                <h2 className="mb-2 bg-stone-600 p-2">{props.title}</h2>
                <p>{props.numberOf} Nguoi hoc | Tao boi {props.author}</p>
            </div>
        </div>
    )
}