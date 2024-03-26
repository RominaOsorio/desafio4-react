const url = 'https://rickandmortyapi.com/api/character'
const MyApi = {
  async consultarApi () {
    const response = await fetch(url)
    const data = await response.json()
    return data.results
  }

}
export default MyApi
