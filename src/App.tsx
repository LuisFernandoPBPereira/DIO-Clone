import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Feed } from "./pages/Feed/Feed";
import { CreateAccount } from "./pages/CreateAccount/CreateAccount";
import { AuthContextProvider } from "./context/auth";

function App() {
  return (
    <Router>
        <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/createAccount" element={<CreateAccount/>}/>
        </Routes>
        </AuthContextProvider>
      </Router>
  );
}

export default App;
