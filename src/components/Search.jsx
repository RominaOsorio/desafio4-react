const Search = ({ setSearch, setPageNumber }) => {
  return (
    <>
      <form className='d-flex justify-content-center gap-2 my-2'>
        <input
          type='text'
          placeholder='Buscar personaje'
          onChange={(e) => {
            setPageNumber(1)
            setSearch(e.target.value)
          }}
        />
      </form>
    </>
  )
}
export default Search
