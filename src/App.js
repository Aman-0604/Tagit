import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Scope from './components/Scope';
import Community from './components/Community';
import Notification from './components/Notification';
import Chat from './components/Chat';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/scope" element={<Scope/>} />
          <Route exact path="/community" element={<Community/>} />
          <Route exact path="/notification" element={<Notification/>} />
          <Route exact path="/chat" element={<Chat/>} />
          <Route exact path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
