import * as S from './styles'

import Logo from '../../assets/logo.png'

export function Header() {
  return (
    <S.Container>
      <img src={Logo} alt="" />
    </S.Container>
  )
}