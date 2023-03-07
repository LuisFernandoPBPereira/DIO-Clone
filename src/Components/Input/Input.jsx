import * as S from "./styled"
import {Controller} from "react-hook-form"

export function Input({name, 
                       control, 
                       type, 
                       placeholder, 
                       errorMessage, 
                       ...rest}) {
  return (
    <>
      <S.InputContainer>
        <Controller
          name={name}
          control={control}
          rules={{required: true}}
          render={({field}) => <S.Input placeholder={placeholder}
                                        type={type} 
                                        {...field}{...rest}/> }
        />
      </S.InputContainer>
      {errorMessage ? <S.ErrorText>{errorMessage}</S.ErrorText> : null}
    </>
  )
}
