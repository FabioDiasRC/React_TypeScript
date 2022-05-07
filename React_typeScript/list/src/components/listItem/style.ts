import styled from 'styled-components'

type ConatinerProps = {
  done: boolean
}

export const Container = styled.div(({done}: ConatinerProps) => (
  `
  display: flex;
  background-color: #20212C;
  padding: 10px;
  border-radius: 10px;
  margin-bottom:10px;
  align-items:center;

  input {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  label {
    font-size: 20px;
    color: #CCC;
    text-decoration: ${ done ? 'line-through' : 'initial'};
    color: ${ done ? 'blue' : ''};
  }
  `
))