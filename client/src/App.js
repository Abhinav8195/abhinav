import "./App.css"
import Home from "./pages/home/Home";
import Watch from './pages/watch/Watch'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { BrowserRouter as Router, Routes, Route ,Redirect} from 'react-router-dom';
import { useContext } from "react";
import {AuthContext} from './authContext/AuthContext'

const App = () => {
  const {user}=useContext(AuthContext);
  return (
    <Router>
      <Routes>
      {/* <Route exact path="/register" element={!user ? <Register /> : <Home />} />
      <Route exact path="/login" element={!user? <Login />: <Home />} />
      <Route exact path="/" element={user ? <Home /> : <Register />} />
      <Route exact path="*" element={<Home/>} />
        {
          user &&(<>
        <Route exact path="/movies" element={<Home type="movies" />} />
        <Route exact path="/series" element={<Home type="series" />} />
        <Route exact path="/watch" element={<Watch/>} />
        <Route exact path="*" element={<Home/>} />
        </>)
        } */}

         <Route exact path="/" element={<Home />} />
          <Route exact path="/movies" element={<Home type="movies" />} />
        <Route exact path="/series" element={<Home type="series" />} />
        <Route exact path="/watch" element={<Watch/>} />
        <Route exact path="*" element={<Home/>} />

       
      </Routes>
    </Router>
  );
};

export default App;