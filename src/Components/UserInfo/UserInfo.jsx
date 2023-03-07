import * as S from "./styled"

export function UserInfo({name, image, percentual}) {
  return (
    <S.UserInfo>
        <S.UserPicture src={image}/>
        <div>
            <S.NameText>{name}</S.NameText>
            <S.Progress percentual={percentual}/>
        </div>
    </S.UserInfo>
  )
}
