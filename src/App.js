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
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import AlertState from './context/alerts/AlertState';
import PostState from './context/posts/PostState';

function App() {
  return (
    <>
    {/* Every component and the components inside them too will get access to the NoteState context. */}
    <PostState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <Alert/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/scope" element={<Scope/>} />
            <Route exact path="/community" element={<Community/>} />
            <Route exact path="/notification" element={<Notification/>} />
            <Route exact path="/chat" element={<Chat/>} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
          </Routes>
        </BrowserRouter>
      </AlertState>
    </PostState>
    </>
  );
}

export default App;
