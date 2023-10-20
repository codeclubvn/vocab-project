import { Avatar, Box, Card, Flex, Text } from '@radix-ui/themes'

interface CardUserProps extends React.ComponentProps<'div'> {
  className?: string
  userName?: string
  avatarUrl?: string
  score?: number
}

export default function CardUser(props: CardUserProps) {
  return (
    <div className={props.className}>
      <Card>
        <Flex
          gap='4'
          align='center'
          justify='between'
        >
          <Flex
            align='center'
            gap='2'
          >
            <Avatar
              size='4'
              src={`${props.avatarUrl}`}
              radius='full'
              fallback='T'
            />
            <Text
              as='div'
              size='3'
              weight='bold'
            >
              {props.userName}
            </Text>
          </Flex>
          <Box>
            <Text
              as='div'
              size='3'
              color='gray'
            >
              {props.score}
            </Text>
          </Box>
        </Flex>
      </Card>
    </div>
  )
}
