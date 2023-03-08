import * as S from './styled'
import logo from "../../Assets/logo-dio.png"
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { useAuth } from '../../hooks/useAuth'

export function Header() {
  const { user, handleSignOut } = useAuth()

  /**
   * Usando o contexto, podemos fazer com que, se o usuário tenha
   * o id, o header mude instantaneamente para o Header de 
   * usuário logado, conforme as condições abaixo
   */
  return (
    <S.Wrapper>
      <S.Header>
        <S.Row>
          <Link to="/">
            <img src={logo} alt="Logo da DIO"/>
          </Link>
          {user.id ? (
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
          {user.id ? (
            <>
              <S.UserPicture src='https://github.com/LuisFernandoPBPereira.png'/>
              <Link to="/"><Button onClick={handleSignOut} label='Sair'/></Link>
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
