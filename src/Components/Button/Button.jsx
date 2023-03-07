import * as S from "./styled"
import { Link } from "react-router-dom"

export function Button({label, variant="primary", onClick, type}) {
  return (
        <S.Button variant={variant} type={type} onClick={onClick}>{label}</S.Button>
  )
}
