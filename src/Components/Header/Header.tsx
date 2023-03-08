import { Button } from '../Button/Button'
import logo from "../../Assets/logo-dio.png"
import * as S from './styled'
import { Link } from 'react-router-dom'

interface IHeader{
  isAuth?: boolean
}

export function Header({ isAuth }: IHeader) {


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
              <Link to="/"><S.MenuRight>Home</S.MenuRight></Link>
              <Link to="/login"><Button label="Entrar"/></Link>
              <Link to="/createAccount"><Button label="Cadastrar"/></Link>
            </>
          )}
        </S.Row>
      </S.Header>
    </S.Wrapper>
  )
}
