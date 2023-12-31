'use client'

import '@radix-ui/themes/styles.css'
import { Select } from '@radix-ui/themes'

interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  size?: any
  className?: string
  color?: any
  variant?: any
  title?: string
  side?: any
  defaultValue?: any
  listValue: Array<string>
}

const SelectComponent = (props: SelectProps) => {
  return (
    <Select.Root
      size={props.size}
      defaultValue={props.defaultValue}
    >
      <Select.Trigger
        className={props.className}
        color={props.color}
        variant={props.variant}
        placeholder={props.title}
        style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: '#586380' }}
      />
      <Select.Content
        position='popper'
        side={props.side}
      >
        <Select.Group>
          <Select.Label style={{ fontWeight: '600' }}>{props.title}</Select.Label>
          {props.listValue.map((value: string, index) => {
            return (
              <Select.Item
                key={`id-${index}`}
                value={value}
              >
                {value}
              </Select.Item>
            )
          })}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}

export default SelectComponent
