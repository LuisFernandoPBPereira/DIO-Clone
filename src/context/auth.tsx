import { useNavigate } from "react-router-dom"
import {createContext, useState} from "react"
import { api } from "../services/api"
import * as I from "./types"
import { IUser } from "../types/user"

//Aqui criamos o contexto de autenticação
export const AuthContext = createContext<I.AuthContext>({} as I.AuthContext)

export const AuthContextProvider = ({
    children
}: I.AuthContextProviderProps) => {

    //Criamos um estado para logar o usuário
    const [user, setUser] = useState<IUser>({} as IUser);

    const navigate = useNavigate()

    //Função para logar
    const handleLogin = async (loginData: I.LoginData) =>{
        try {
            const { data } = await api.get(`users?email=${loginData.email}&senha=${loginData.password}`)
            if(data.length === 1){
                setUser(data[0])
                navigate("/feed")
            }
            else{
              alert("Email ou senha inválido")
            }
          } catch (error) {
            alert("Houve um erro, tente novamente")
          }
    }

    //Função para deslogar o usuário
    const handleSignOut = () => {
      setUser({} as IUser)
    }

    return(
        <AuthContext.Provider value={{user, handleLogin, handleSignOut}}>
            {children}
        </AuthContext.Provider>
    )
}