import { Box, Text, Flex } from '@radix-ui/themes'
import { Facebook, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='text-[#8f8f8f] py-5 flex justify-between items-center bg-primary w-full'>
      <Flex
        justify='between'
        width='100%'
      >
        <Box className='p-4'>
          <Text>@Copyright 2023</Text>
        </Box>
        <Box className='p-4 flex items-center'>
          <Facebook
            color='#ffffff'
            strokeWidth={1}
            className='mr-4'
            absoluteStrokeWidth
          />
          <Twitter
            color='#ffffff'
            strokeWidth={1}
            className='mr-4'
            absoluteStrokeWidth
          />
          <Youtube
            color='#ffffff'
            className='mr-4'
            strokeWidth={1}
            absoluteStrokeWidth
          />
        </Box>
      </Flex>
    </footer>
  )
}

export default Footer
