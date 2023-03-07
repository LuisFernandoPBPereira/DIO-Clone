import * as S from "./styled"
import { Header } from "../../Components/Header/Header"
import { Card } from "../../Components/Card/Card"
import { UserInfo } from "../../Components/UserInfo/UserInfo"

export function Feed() {
  return (
    <>
      <Header isAuth/>
      <S.Feed>
        <S.Column flex={3}>
          <S.Title>Feed</S.Title>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </S.Column>
        <S.Column flex={1}>
          <S.TitleHighlight>#RANKING 5 TOP DA SEMANA</S.TitleHighlight>
          <UserInfo percentual={35} name={"Luis Fernando"} image={"https://github.com/LuisFernandoPBPereira.png"}/>
          <UserInfo percentual={80} name={"Luis Fernando"} image={"https://github.com/LuisFernandoPBPereira.png"}/>
          <UserInfo percentual={10} name={"Luis Fernando"} image={"https://github.com/LuisFernandoPBPereira.png"}/>
          <UserInfo percentual={25} name={"Luis Fernando"} image={"https://github.com/LuisFernandoPBPereira.png"}/>
          <UserInfo percentual={90} name={"Luis Fernando"} image={"https://github.com/LuisFernandoPBPereira.png"}/>
          <UserInfo percentual={2} name={"Luis Fernando"} image={"https://github.com/LuisFernandoPBPereira.png"}/>

        </S.Column>
      </S.Feed>
    </>
  )
}
