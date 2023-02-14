import React, { useContext } from 'react'
import { ListContext } from './Context'

const List = () => {
  const { list } = useContext(ListContext)
  return (
    <div className='list'>
      {list}
    </div>
  )
}

export default List