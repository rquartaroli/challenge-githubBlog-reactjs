import styled from 'styled-components'

import HeaderBackground from '../../assets/headerBackground.png'

export const Container = styled.div`
  width: 100%;
  height: 18.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${HeaderBackground}) no-repeat center;
  background-size: cover;
`