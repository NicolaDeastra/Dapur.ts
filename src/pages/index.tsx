import { Text } from '@chakra-ui/react'
import Head from 'next/head'

import Api from '@src/lib'
import Hero from '@src/components/Hero'
import { Container } from '@src/components/Container'
import { Main } from '@src/components/Main'
import CardGrid from '@src/components/CardGrid'
import { Footer } from '@src/components/Footer'

export interface Recipe {
  title?: string
  thumb?: string
  key?: string
  times?: string
  portion?: string
  dificulty?: string
  category?: string
  tags?: string
}

interface PageProps {
  recipes: Recipe[]
  article: Recipe[]
}

export const getStaticProps = async () => {
  const initialRecipe = await Api.getRecipe(1)
  const recipes = initialRecipe.results.slice(0, 9)

  const initialArticle = await Api.getArticle()
  const article = initialArticle.results.slice(0, 9)

  return { props: { recipes, article }, revalidate: 60 }
}

const Index = ({ recipes, article }: PageProps) => (
  <Container height='100vh'>
    <Head>
      <title>Let's Start Cooking with Popular Recipe | Dapur</title>
    </Head>
    <Main>
      <Hero />
      <CardGrid title='Recipe' data={recipes} />
      <CardGrid title='Article' data={article} />
    </Main>

    <Footer>
      <Text>lol</Text>
    </Footer>
  </Container>
)

export default Index
