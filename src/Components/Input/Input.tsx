import * as S from "./styled"
import {Controller} from "react-hook-form"

interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
  name: string,
  control: any,
  type?: string,
  placeholder: string,
  errorMessage?: string
}

export function Input({name, 
                       control, 
                       type, 
                       placeholder, 
                       errorMessage, 
                       ...rest} : IInput) {
  return (
    <>
      <S.InputContainer>
        <Controller
          name={name}
          control={control}
          rules={{required: true}}
          render={({field : {value, onChange}}) => 
          <S.Input placeholder={placeholder}
                   type={type}
                   value={value}
                   onChange={onChange} 
                   {...rest}
          /> 
        }
        />
      </S.InputContainer>
      {errorMessage ? <S.ErrorText>{errorMessage}</S.ErrorText> : null}
    </>
  )
}
