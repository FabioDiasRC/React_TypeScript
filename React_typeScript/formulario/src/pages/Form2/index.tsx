import { useNavigate, Link } from 'react-router-dom'
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption/index'

export const Form2 = () => {

  const history = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      history('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      })
    }
  }, [])


  const handleNextStep = () => {
    if (state.name !== '') {
      history('/step3')
    } else {
      alert('Preencha os dados!')
    }
  }

  const setLevel = (level:number) => {
    dispatch ({
      type: FormActions.setLevel,
      payload: level
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Form 2/3</p>
        <h1>{state.name}, o que melhor descreve voce?</h1>
        <p>Escolha a melhor opaçao que descreve voce atualmente</p>

        <hr />

        <SelectOption
          title='Sou iniciante'
          description='Comecei  a programar a menos de 2 anos'
          icon=':)'
          selected={state.level === 0}
          onClick = {()=>setLevel(0)}
          />

        <SelectOption
          title='Sou programador'
          description='programo a 2 anos ou mais'
          icon=':))'
          selected={state.level === 1}
          onClick = {()=>setLevel(0)}
        />

        <Link to="/" className='backButton'>Voltar</Link>
        <button onClick={handleNextStep}>Proximo</button>
      </C.Container>
    </Theme>
  )
}
