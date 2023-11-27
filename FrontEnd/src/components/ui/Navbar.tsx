'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Flex, Text } from '@radix-ui/themes'
import React from 'react'
import { LibrarySquare, PlusCircle } from 'lucide-react'
import SearchInput from '../landing/SearchInput'
import Button from './Button'
// import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const router = useRouter()

  return (
    <NavigationMenu.Root className=' flex w-full p-4 bg-[#f1ebeb]'>
      <Flex
        width='100%'
        align={{
          initial: 'center',
        }}
        direction={{
          initial: 'column',
          md: 'row',
        }}
        justify='between'
        gap='4'
        px='4'
        py={{
          initial: '0',
          md: '2',
        }}
      >
        <NavigationMenu.List className=' flex items-center gap-2 mr-2 font-medium flex-1'>
          <NavigationMenu.Item className='flex items-center'>
            <LibrarySquare
              size='40'
              className='mr-2'
            />
            <Link
              href='/'
              passHref
              legacyBehavior
            >
              <Text
                as='span'
                className='text-xl whitespace-nowrap cursor-pointer'
              >
                JOURNEY
              </Text>
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className='md:ml-8  '>
            <Link
              href='/courses'
              prefetch={false}
            >
              Course
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link
              href='/lessons'
              prefetch={false}
            >
              Lesson
            </Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>

        <SearchInput placeholder='Search' />

        <NavigationMenu.List className='flex items-center '>
          <NavigationMenu.Item>
            {/* <ThemeToggle /> */}
            <button
              className='mr-4'
              onClick={() => {
                router.push(`/lessons/new`)
              }}
              role='link'
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  router.push(`/lessons/new`)
                }
              }}
            >
              <PlusCircle
                size={32}
                strokeWidth={1.5}
              />
            </button>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Button
              onClick={() => router.push('/signin')}
              variant='outlineBlack'
            >
              Sign In
            </Button>
          </NavigationMenu.Item>
          <NavigationMenu.Item className='mx-2'>
            <Button onClick={() => router.push('/signup')}>Sign Up</Button>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </Flex>
    </NavigationMenu.Root>
  )
}

export default Navbar
