import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";

interface CardUserProps extends React.ComponentProps<'div'> {
    userName?: string,  
    className?: string,
    avatarUrl?: string,
    score?: number   
}

export default function CardUser(props: CardUserProps) {
    return (
        <div className={props.className}>
            <Card>
                <Flex gap="4" align="center" justify='between'>
                <Flex align='center' gap='2'>
                    <Avatar
                    size="4"
                    src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                    radius="full"
                    fallback="T"
                    /> 
                    <Text as="div" size="3" weight="bold">
                        User name
                    </Text> 
                </Flex>
                <Box> 
                    <Text as="div" size="3" color="gray">
                        Scores
                    </Text>
                </Box>
                </Flex>
            </Card>   
        </div>
    )
}