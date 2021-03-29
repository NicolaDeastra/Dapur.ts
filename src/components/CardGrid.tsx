import {
  Link as ChakraLink,
  Box,
  Stack,
  Flex,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'

import NextLink from 'next/link'

import type { Recipe } from '@src/pages'
import Card from '@src/components/Card'

interface CardGridProps {
  data: Recipe[]
  title: string
}

const CardGrid = ({ data, title = 'title' }: CardGridProps) => {
  return (
    <Stack direction='column' spacing='6'>
      <Flex justifyContent='space-between' pr={['1rem', '2rem']}>
        <Box
          maxW='3rem'
          overflow='visible'
          pb='2'
          borderBottomWidth='4px'
          borderBottomColor='primary.600'
          cursor='pointer'
        >
          <NextLink href='#'>
            <Heading w='6rem' size='sm'>
              {title}
            </Heading>
          </NextLink>
        </Box>
        {title !== 'Category' ? (
          <Box>
            <NextLink href='#'>
              <ChakraLink as='p'>see all</ChakraLink>
            </NextLink>
          </Box>
        ) : null}
      </Flex>
      <SimpleGrid columns={[1, 3]} spacing='3'>
        {data?.map((recipe: Recipe) => (
          <Card data={recipe} key={recipe.key} />
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default CardGrid
