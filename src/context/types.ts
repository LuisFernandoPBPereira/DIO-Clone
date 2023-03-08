import { IUser } from "../types/user"

export interface AuthContext {
    user: IUser,
    handleLogin: (loginData: LoginData) => Promise<void>
    handleSignOut: () => void
}

export interface AuthContextProviderProps{
    children: React.ReactNode
}

export interface LoginData{
    email:string,
    password:string
}