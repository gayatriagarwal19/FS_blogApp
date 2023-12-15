import { useContext } from "react";
import TopBar from "./components/topbar/TopBar.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Single from "./pages/single/Single.jsx";
import Write from "./pages/write/Write.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Context } from "./context/Context.js";
 
function App() {
  const {user} = useContext(Context); 
  return (
    <Router>
    <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/posts" element={<Home />}/>
        <Route path="/post/:postId" element={<Single />}/>
        <Route path="/register" element={user ? <Home /> : <Register />}/>
        <Route path="/login" element={user ? <Home /> : <Login />}/>
        <Route path="/settings" element={user ? <Settings /> :<Register />}/>
        <Route path="/write" element={user ? <Write /> :<Register />}/> 
      </Routes>
    </Router>
  );
}

export default App;
