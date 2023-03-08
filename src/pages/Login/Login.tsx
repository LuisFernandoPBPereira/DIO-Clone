import * as S from "./styled"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Button } from "../../Components/Button/Button"
import { Header } from "../../Components/Header/Header"
import { Input } from "../../Components/Input/Input"

import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useAuth } from "../../hooks/useAuth"

const schema = yup.object({
  email: yup.string().email("email não é válido").required("Campo obrigatório"),
  password: yup.string().min(3, "No mínimo 3 caracteres").required("Campo obrigatório"),
}).required()

//Interface das tipagens do Formulário
interface IFormData{
  email: string,
  password: string
}

export function Login() {
  //Chamamos o contexto de autenticação com a função de Login
  const { handleLogin } = useAuth()

  const  {control,
          handleSubmit,
          formState: { errors } }  = 
          useForm<IFormData>({
            resolver: yupResolver(schema),
            mode: "onChange"
  })

  //Ao executaqr a função de onSubmit, handleLogin é chamada
  const onSubmit = async (formData : IFormData) => {
    handleLogin(formData)
  };

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
