import { FacebookIcon, TwitterIcon, NotionIcon } from "@/components/common/Icons"


const Footer = () => {
  return (
    <footer className="container py-10 flex justify-between items-center">
      <div className="p-4">
        <h1>@Copyright 2023</h1>
      </div>
      <div className="p-4 flex items-center">
        <FacebookIcon className="h-[20px] w-[20px] mr-4" />
        <TwitterIcon className="h-[20px] w-[20px] mr-4" />
        <NotionIcon className="h-[20px] w-[20px] mr-4" />
      </div>
    </footer>
  )
}

export default Footer