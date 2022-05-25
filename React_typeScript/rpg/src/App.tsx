import { useEffect } from 'react';
import * as C from './App.styles'
import { Character } from './components/Character';
import { useCharacter } from './hooks/hooksCharacter';

const App = () => {
  const char = useCharacter();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  },[])

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyA':
      case'KeyArrowLeft':
        char.moveLeft()
      break;

      case 'KeyW':
      case 'KeyArrowUp':
        char.moveUp()
      break;

      case 'KeyD':
      case 'KeyArrowRight':
        char.moveRight()
      break;

      case 'KeyS':
      case 'KeyArrowDown':
        char.moveDown()
      break;
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side}/>
      </C.Map>
    </C.Container>
  )
}

export default App;