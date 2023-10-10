
type Props = {
  className?: string,
  title?: string,
  description?: string,
  image?: string
}

const CardFeedBack = (props: Props) => {
  return (
    <div className={`pl-4 flex flex-col justify-center items-center ${props.className}`}>
      <div className="mb-4 h-[200px] w-[200px] rounded-full overflow-hidden">
        <img className="object-cover h-[100%] w-[100%]" src={props.image} alt={`This is a image of ${props.title}`} />
      </div>
      <h2 className="mb-4 font-medium text-2xl uppercase">{props.title}</h2>
      <p className="max-w-[300px] text-center">{props.description}</p>
    </div>
  )
}

export default CardFeedBack