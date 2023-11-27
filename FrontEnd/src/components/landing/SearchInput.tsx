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
    width: '100%',
    maxWidth: '400px',
    height: '2.5rem',
    paddingLeft: '1rem',
  },
}: InputProps) => {
  return (
    <TextField.Root style={style}>
      <TextField.Slot>
        <MagnifyingGlassIcon
          height='20'
          width='20'
        />
      </TextField.Slot>
      <TextField.Input
        size='3'
        placeholder={placeholder}
      />
    </TextField.Root>
  )
}

export default SearchInput
