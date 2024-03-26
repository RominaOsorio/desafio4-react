import { useState, useEffect } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import Pagination from './components/Pagination'
import Search from './components/Search'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState('')
  const [getData, setGetData] = useState([])
  const { info, results } = getData
  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`

  useEffect(() => {
    (async function () {
      const data = await fetch(url).then((res) => res.json())
      setGetData(data)
    })()
  }, [url])

  return (
    <>
      <Header />
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className='container'>
        <div className='row'>
          <Cards results={results} />
        </div>

      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </>
  )
}

export default App
