import React from 'react'

const Cards = ({ results }) => {
  let character

  if (results) {
    character = results.map(x => {
      const { id, name, image, gender, species, status } = x
      return (
        <div key={id} className='col-4'>
          <div className=' card mt-3'>
            <img src={image} className='img-fluid' />
            <div className='content text-center'>
              <div className='fs-1 my-2'>{name}</div>
              <div className='fs-3 mb-2'>{gender}</div>
              <div className='fs-4 mb-2'>{species}</div>
              <div className='fs-4 mb-2'>{status}</div>
            </div>
          </div>
        </div>
      )
    })
  } else {
    character = 'No se encontraron coincidencias'
  }
  return (
    <>{character}</>
  )
}
export default Cards
