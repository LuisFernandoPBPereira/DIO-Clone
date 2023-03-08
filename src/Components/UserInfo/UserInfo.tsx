
import * as S from "./styled"

interface IUserInfo{
  name: string,
  image?: string,
  percentual: number
}

export function UserInfo({name, image, percentual}: IUserInfo) {
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
