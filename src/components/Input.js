import React, { useContext, useRef } from 'react'
import { ListContext } from './Context'
import ToDo from './ToDo'

const Input = () => {
  const { list, setList } = useContext(ListContext)
  const inputRef = useRef(null)
  
  

  // Add To do
  const handleClick = () => {
    const input = inputRef.current
    const randomKey = Math.floor(Math.random() * 10000)
    if (input.value) {
      setList([...list, <ToDo content={input.value} key={randomKey} id={randomKey}/>])
     input.value = ''
      input.focus();
    }
  } 

  // Enter Add
    const enter = event => event.key === 'Enter' && handleClick()


  return (
    <div className='input-box' onKeyDown={enter}>
      <input type='text' ref={inputRef} />
      <div className='btn' onClick={handleClick}><p>Add</p></div>
    </div>
  )
}

export default Input