import styled from 'styled-components'

export const Result = styled.h1`
  font-family: "Exo", sans-serif;
  font-variant-caps: petite-caps;
  text-transform: capitalize;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  place-content: center;
`

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: row;
  place-content: center;
`

export const Input = styled.textarea`
  max-height: 200px;
  resize: vertical;
`