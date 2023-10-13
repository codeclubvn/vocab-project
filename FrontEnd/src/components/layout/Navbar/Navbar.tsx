"use client"
import { ButtonCallToAction } from "@/components/common/Button";
import { SearchInput } from "@/components/common/Input";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {

  return (
    <NavigationMenu.Root className="navbar">
      <div className="container h-[100%] flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/quizletTablet.svg" alt="Logo" className="hidden lg:block h-[1.5rem] w-full" width={20} height={20} />
          <Image src="/assets/icons/hambuger.svg" alt="Navigation" className="lg:hidden h-[30px] w-[30px] cursor-pointer mr-4" width={20} height={20} />
          <Image src="/quizletMobile.svg" alt="Logo" className="block lg:hidden" width={20} height={20} />
        </div>
        <div className="hidden md:flex items-center">
          <Link href={"/"} className="lg:mr-4 uppercase text-sm whitespace-nowrap">
            Trang chủ
          </Link>
          <Link href={"/courses"} className=" mx-[1rem] lg:mx-[2rem] uppercase text-sm whitespace-nowrap">
            Khóa học
          </Link>
          <SearchInput placeholder="Search" />
        </div>
        <div className="flex ">
          <ButtonCallToAction route="/signin" className="bg-accent-1 mx-2 border-2 border-solid border-black" classNameTitle="text-primary text-[10px]">
            Đăng nhập
          </ButtonCallToAction>
          <ButtonCallToAction route="/signup" className="bg-accent-0" classNameTitle="text-[10px]">
            Đăng ký
          </ButtonCallToAction>
        </div>
      </div>
      <div className="md:hidden w-full items-center justify-center bg-secondary p-2">
        <SearchInput placeholder="Search" style={
          {
            width: '100%',
            height: '2.5rem'
          }
        } />
      </div>
    </NavigationMenu.Root>
  )
}

export default Navbar