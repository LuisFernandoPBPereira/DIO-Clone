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


export function CreateAccount() {

  const navigate = useNavigate()

  const  {control, handleSubmit, formState: { errors } }  = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  })

  const onSubmit = async formData => {
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

  function handleClickSignIn(){
    navigate("/feed")
  }

  return (
    <>
      <Header/>
      <S.CreateAccount>
        <S.Column>
          <S.Title> 
            A plataforma para você aprender com experts, dominar as
            principais tecnologias e entrar mais rápido nas
            empresas mais desejadas
          </S.Title>
        </S.Column>
        <S.Column>
          <S.Wrapper>
            <S.TitleCreateAccount>Comece agora grátis</S.TitleCreateAccount>
            <S.SubitleCreateAccount>Crie sua conta e make the change._</S.SubitleCreateAccount>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="Nome completo"
                     errorMessage={errors?.email?.message}
                     control={control}
                     type="email"
                     placeholder="Nome completo"
                     />
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
              <Button label={"Criar minha conta"} 
                      variant={"secondary"} 
                      // onClick={handleClickSignIn}
                      type="submit"
                      
                      />
            </form>
            <S.Row>
              <S.UserTermsText>
                Ao clicar em "criar minha conta",
                declaro que aceito as Políticas de 
                Privacidade e os Termos de Uso da DIO
              </S.UserTermsText>
            </S.Row>
            <S.Row>
              <S.LoginText>
                Já tenho conta. 
                <Link to="/login">
                  <S.TextHighlight> Fazer login</S.TextHighlight>
                </Link>
              </S.LoginText>
            </S.Row>
          </S.Wrapper>
        </S.Column>
      </S.CreateAccount>
    </>
  )
}
