import * as S from "./styled"

interface IButton{
  label:string,
  variant?:string,
  onClick?: () => void,
  type?:any
}

export function Button({label, variant="primary", onClick, type}: IButton) {
  return (
        <S.Button variant={variant} type={type} onClick={onClick}>{label}</S.Button>
  )
}
