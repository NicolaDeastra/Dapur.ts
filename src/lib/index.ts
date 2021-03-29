const baseUrl = process.env.NEXT_PUBLIC_API_URL

class Api {
  static getRecipe = async (page: number) => {
    const response = await fetch(`${baseUrl}/recipes/${page}`)

    if (!response.ok) {
      throw new Error("Can't fetch data")
    }

    return await response.json()
  }

  static getArticle = async () => {
    const response = await fetch(`${baseUrl}/categorys/article/tips-masak`)

    if (!response.ok) {
      throw new Error("Can't fetch data")
    }

    return await response.json()
  }
}

export default Api
