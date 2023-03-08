import * as S from "./styled"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Button } from "../../Components/Button/Button"
import { Header } from "../../Components/Header/Header"
import { Input } from "../../Components/Input/Input"

import { api } from "../../services/api"

import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
  email: yup.string().email("email não é válido").required("Campo obrigatório"),
  password: yup.string().min(3, "No mínimo 3 caracteres").required("Campo obrigatório"),
}).required()

interface IFormData{
  email: string,
  password: string
}

export function Login() {

  const navigate = useNavigate()

  const  {control, handleSubmit, formState: { errors } }  = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange"
  })

  const onSubmit = async (formData : IFormData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
      if(data.length === 1){
        navigate("/feed")
      }
      else{
        alert("Email ou senha inválido")
      }
    } catch (error) {
      alert("Houve um erro, tente novamente")
    }
  };

  // function handleClickSignIn(){
  //   navigate("/feed")
  // }

  return (
    <>
      <Header/>
      <S.Login>
        <S.Column>
          <S.Title> 
            A plataforma para você aprender com experts, dominar as
            principais tecnologias e entrar mais rápido nas
            empresas mais desejadas
          </S.Title>
        </S.Column>
        <S.Column>
          <S.Wrapper>
            <S.TitleLogin>Faça seu login</S.TitleLogin>
            <S.SubitleLogin>Faça seu login e make the change._</S.SubitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email"
                     errorMessage={errors?.email?.message}
                     control={control}
                     type="email"
                     placeholder="Email"
                     />
              <Input name="password"
                     errorMessage={errors?.password?.message}
                     control={control}
                     type={"password"}
                     placeholder="Senha"
                     />
              <Button label={"Entrar"} 
                      variant={"secondary"} 
                      // onClick={handleClickSignIn}
                      type="submit"
                      
                      />
            </form>
            <S.Row>
              <S.ForgotText>Esqueci minha senha</S.ForgotText>
              <Link to="/createAccount"><S.CreateText>Criar conta</S.CreateText></Link>
            </S.Row>
          </S.Wrapper>
        </S.Column>
      </S.Login>
    </>
  )
}
