import '@radix-ui/themes/styles.css'
import { Select } from '@radix-ui/themes'


type SelectPros = {
  size : any,
  className : string,
  color : any,
  variant: any,
  title : string,
  side: any,
  value: Array<number | string>
}

const SelectComponent = (props: SelectPros): JSX.Element => {
  return (
    <Select.Root size={props.size}>
      <Select.Trigger
        className={props.className}
        color={props.color}
        variant= {props.variant}
        placeholder={props.title}
      />
      <Select.Content side={props.side}>
        <Select.Group>
          <Select.Label>{props.title}</Select.Label>
          {
            props.value.map((val, index): any => {
                return <Select.Item key={index} value='1'>{val}</Select.Item>
            })
          }
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}

export default SelectComponent
