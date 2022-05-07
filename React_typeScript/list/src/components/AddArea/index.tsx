import { useState, KeyboardEvent } from 'react'
import * as C from './styles'

type Props = {
  onEnter: (taskname: string) => void
}

export const AddArea = ({onEnter} : Props) => {

  const [inputText, setInputext] = useState('')

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !=='') {
      onEnter(inputText)
      setInputext('')
    }
  }

  return (
    <C.Container>
      <div className='image'>+</div>

      <input
        type='text'
        placeholder='Adicione uma tarefa'
        value={inputText}
        onChange={e => setInputext(e.target.value)}
        onKeyUp={handleKeyUp}
      />

    </C.Container>
  )
}