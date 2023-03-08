import * as S from "./styled"
import bannerImage from "../../Assets/banner.png"
import { Button } from "../../Components/Button/Button"
import { Header } from "../../Components/Header/Header"
import { useNavigate } from "react-router-dom"

export function Home() {

  const navigate = useNavigate()

  const handleClickSignIn = () =>{
    navigate("/login")
  }

  return (
    <>
      <Header/>
      <S.Home>
        <div className="startNow">
          <S.Title> 
            <S.TitleHighlight>
              Implemente
              <br />
            </S.TitleHighlight>
            o seu futuro global agora!
          </S.Title>
          <S.TextContent>
            Domine as tecnologias utilizadas pelas empresas mais
            inovadoras do mundo e encare seu novo desafio
            profissional, evouluindo em comunidade com os melhores experts
          </S.TextContent>
          <Button label={"Começar agora"} 
                  variant={"secondary"} 
                  onClick={handleClickSignIn}/>
        </div>
        <div>
          <img src={bannerImage} alt="Imagem Principal" />
        </div>
      </S.Home>
    </>
  )
}
