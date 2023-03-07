import { Button } from '../Button/Button'
import logo from "../../Assets/logo-dio.png"
import * as S from './styled'

export function Header({ isAuth }) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Row>
          <img src={logo} alt="Logo da DIO"/>
          {isAuth ? (
            <>
              <S.SearchInput>
                  <S.Input placeholder='Buscar...'/>
              </S.SearchInput>
              <S.Menu>Live Code</S.Menu>
              <S.Menu>Global</S.Menu>
            </>  
          ) : null}
        </S.Row>
        <S.Row>
          {isAuth ? (
            <>
              <S.UserPicture src='https://github.com/LuisFernandoPBPereira.png'/>
            </>
          ) : (
            <>
              <S.MenuRight href='*'>Home</S.MenuRight>
              <Button label={"Entrar"}/>
              <Button label={"Cadastrar"}/>
            </>
          )}
        </S.Row>
      </S.Header>
    </S.Wrapper>
  )
}
