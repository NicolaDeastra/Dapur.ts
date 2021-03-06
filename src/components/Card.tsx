import NextLink from 'next/link'
import { Box, Img, Icon, HStack, Text } from '@chakra-ui/react'
import {
  FaRegClock,
  FaThumbsUp,
  FaConciergeBell,
  FaLightbulb,
  FaMortarPestle,
} from 'react-icons/fa'

import type { Recipe } from '@src/pages'

interface CardProps {
  data: Recipe
}

const Card = ({
  data: { thumb, title, times, portion, dificulty, tags, key, category },
}: CardProps) => {
  return (
    <NextLink href={tags ? `/article/${tags}/${key}` : `/recipe/${key}`}>
      <Box
        maxW='sm'
        border='1px'
        borderColor='gray.300'
        cursor='pointer'
        mb={['2rem', '1.5rem']}
        _hover={{
          boxShadow: 'lg',
        }}
      >
        <Img src={thumb} alt={title} maxH='14.5rem' />

        <Box py='6' pr={[0, '3']} pl={['1', '3']}>
          <Box d='flex' alignItems='center' color='gray.600'>
            {times && dificulty ? (
              <>
                <HStack>
                  <Icon as={FaRegClock} />
                  <Text fontSize={['xs', 'sm']}>{times}</Text>
                </HStack>
                <HStack px='4'>
                  <Icon as={FaConciergeBell} />
                  <Text fontSize={['xs', 'sm']}>{portion}</Text>
                </HStack>
                <HStack>
                  <Icon
                    as={dificulty === 'Mudah' ? FaThumbsUp : FaMortarPestle}
                  />
                  <Text fontSize={['xs', 'sm']}>{dificulty}</Text>
                </HStack>
              </>
            ) : (
              <HStack>
                <Icon as={FaLightbulb} />
                <Text>{category}</Text>
              </HStack>
            )}
          </Box>

          <Box mt='2' fontWeight='semibold' as='h4' lineHeight='tight'>
            {title}
          </Box>
        </Box>
      </Box>
    </NextLink>
  )
}

export default Card
