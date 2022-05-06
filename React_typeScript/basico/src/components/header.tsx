type Props = {
  name: string;
  age: number
}

const Header = ({ name, age }: Props) => {

  return (
    <header>
      <h1>name: {name} <br/> idade:{age}</h1>
    </header>
  )
}

export default Header;