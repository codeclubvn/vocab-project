"use client"

import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { TextField } from '@radix-ui/themes'

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  placeholder?: string,
  style?: React.CSSProperties
}

const SearchInput = (props: InputProps) => {
  return (
    <TextField.Root style={props.style} >
      <TextField.Slot>
        <MagnifyingGlassIcon />
      </TextField.Slot>
      <TextField.Input placeholder={props.placeholder} style={{ height: '100%' }} />
    </TextField.Root>
  )
}

SearchInput.defaultProps = {
  placeholder: 'Search',
  style: {
    width: '30vw',
    maxWith: '400px',
    height: '3rem',
  }
}

export default SearchInput