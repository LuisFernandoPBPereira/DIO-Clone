import * as S from "./styled"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Feed } from "./pages/Feed/Feed";
import { CreateAccount } from "./pages/CreateAccount/CreateAccount";

function App() {
  return (
    <S.App>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/createAccount" element={<CreateAccount/>}/>
        </Routes>
      </Router>
    </S.App>
  );
}

export default App;
