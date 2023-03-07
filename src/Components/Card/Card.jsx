import * as S from "./styled"

export function Card() {
  return (
    <S.Card>
        <S.ImageBackground/>
        <S.Content>
            <S.UserInfo>
                <S.UserPicture src="https://github.com/LuisFernandoPBPereira.png"/>
                <div>
                    <h4>Luis Fernando</h4>
                    <p>Há 10 minutos</p>
                </div>
            </S.UserInfo>
            <S.PostInfo>
                <h4>Projeto para Curso de React</h4>
                <p>Projeto feito no curso de React no Bootcamp <strong>Saiba Mais</strong></p>
            </S.PostInfo>
            <S.HasInfo>
                <h4>#React.js #JavaScript</h4>
                <p>
                    Likes 10
                </p>
            </S.HasInfo>
        </S.Content>
    </S.Card>
  )
}
