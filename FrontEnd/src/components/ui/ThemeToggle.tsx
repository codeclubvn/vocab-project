'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { THEME_MODES } from '@/constants'
import { cn } from 'react-swisskit'
import { Box } from '@radix-ui/themes'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Box
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='mr-4'
    >
      {THEME_MODES.map(({ label, value }) => (
        <span
          key={value}
          className={cn(
            'flex items-center p-2 rounded-sm px-4 w-full justify-center cursor-pointer text-muted-foreground ',
            theme === value && 'bg-gray-950 shadow text-black',
          )}
        >
          {value === 'dark' ? <Moon /> : <Sun />}
          <span className='ml-2'>{label}</span>
        </span>
      ))}
    </Box>
  )
}

export default ThemeToggle
