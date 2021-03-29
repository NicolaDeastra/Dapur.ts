import { Flex, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => {
  return (
    <Flex
      direction='column'
      alignItems='center'
      pr={['1rem', '2rem']}
      pl={['1rem', '2rem']}
      justifyContent='flex-start'
      {...props}
    />
  )
}
