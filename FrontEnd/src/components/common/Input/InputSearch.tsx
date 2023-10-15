'use client'

import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { TextField } from '@radix-ui/themes'

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  placeholder?: string
  style?: React.CSSProperties
}

const SearchInput = ({
  placeholder = 'Search',
  style = {
    width: '30vw',
    maxWidth: '400px',
    height: '3rem',
  },
}: InputProps) => {
  return (
    <TextField.Root style={style}>
      <TextField.Slot>
        <MagnifyingGlassIcon />
      </TextField.Slot>
      <TextField.Input
        placeholder={placeholder}
        style={{ height: '100%' }}
      />
    </TextField.Root>
  )
}

export default SearchInput
