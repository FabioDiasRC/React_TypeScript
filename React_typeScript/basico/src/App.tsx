import './App.css';
import { useState } from 'react';
import Header from './components/header'
import Footer from './components/footer';

function App() {

  let name = 'AAAAA'

  const [list, setList] = useState([
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'bbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    'ccccccccccccccccccccccccccc'
  ])

  const [age, setAge] = useState(90)

  const [bg, setBg] = useState('#FF0000')

  const handleClick = () => {
    setBg('blue')
  }

  const handle20 = () => {
    setAge(20)
  }

  const handle90 = () => {
    setAge(90)
  }

  return (
    <div style={{ backgroundColor: bg }}>
      <button onClick={handleClick}>clicou</button>
      <button onClick={handle20}>20 anos</button>
      <button onClick={handle90}>90 anos</button>
      <br />

      <Header name={name} age={age} />
      {age > 30 && "tenho mais de 30 anos"}

      <br />

    <ul>
      {list.map((item, index) => (
        <li key = {index}>{item}</li>
        ))}
    </ul>

        <Footer />
    </div>
      );
}

      export default App;
