import { useState } from 'react'
import { Result, Form, WrapperInput, Input } from './Cueilleur.styled'

export default function Cueilleur() {
  const [chosen, setChosen] = useState()
  function onSubmit(e) {
    e.preventDefault()
    setChosen(
      chooser(
        e.target.vinhos.value
          .split('\n')
          .flatMap((v) => v.split(','))
          .filter(Boolean)
          .map((v) => v.trim())
      )
    )
  }
  return (
    <>
      <Form onSubmit={onSubmit}>
        <h3>Quais opções de vinho estão disponíveis?</h3>
        <WrapperInput>
          <div class="wrapper-textarea">
            <Input type="text" name="vinhos" />
          </div>
          <button type="submit">
            <span role="img" aria-label="Escolher vinho">
              🍷
            </span>
          </button>
        </WrapperInput>
      </Form>
      {chosen && (
        <>
          <h3>Parabéns! Você vai beber</h3>
          <Result>{chosen}</Result>
        </>
      )}
    </>
  )
}

function chooser(list) {
  const index = Math.floor(Math.random() * list.length)
  return list[index]
}
