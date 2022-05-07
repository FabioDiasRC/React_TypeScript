import { useState } from 'react'
import * as C from './App.styles'
import './App.css' //reset css
import { Item } from './types/item'
import ListItem from './components/listItem'
import {AddArea } from './components/AddArea'

const App = () => {

  const [list, setList] = useState<Item[]>([
    {id:1, name: 'tarefa1', done: false},
    {id: 2, name: 'tarefa 2', done: false}
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id:list.length + 1,
      name:taskName,
      done:false
    })
    setList(newList)
  } 

  return (
    <>
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

            <AddArea onEnter={handleAddTask}/>
            {list.map((item, id) => (
                <ListItem key={id} item = {item}/>
            ))}

          
        </C.Area>
      </C.Container>
    </>
  )
}

export default App;