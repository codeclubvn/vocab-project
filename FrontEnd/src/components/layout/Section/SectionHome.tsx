import { ButtonCallToAction } from "@/components/common/Button"

type Props = {
  title?: string,
  description?: string,
  image?: string,
  imageClassName?: string,
  buttonTitle?: string,
  isRightSide?: boolean
  route?: string
}

const SectionHome = (props: Props) => {



  if (props.isRightSide) {
    return (
      <section className="my-[80px] ">
        <div className="container flex flex-wrap justify-center">
          <div className="w-full md:w-1/2">
            <div className="p-4">
              <img src={props.image} alt="" className={`${props.imageClassName}`} />
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4" >{props.title}</h2>
              <p className="mb-4">{props.description}</p>
              <ButtonCallToAction route={props.route} className="bg-accent-0 !px-[40px]">
                {props.buttonTitle}
              </ButtonCallToAction>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="my-[80px] ">
      <div className="container flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 ">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4" >{props.title}</h2>
            <p className="mb-4">{props.description}</p>
            <ButtonCallToAction route={props.route} className="bg-accent-0 !px-[40px]">
              {props.buttonTitle}
            </ButtonCallToAction>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="p-4">
            <img src={props.image} alt="" className={`${props.imageClassName}`} />
          </div>
        </div>
      </div>
    </section>
  )
}


SectionHome.defaultProps = {
  isRightSide: false,
  imageClassName: 'w-full h-[250px] object-cover'
}

export default SectionHome