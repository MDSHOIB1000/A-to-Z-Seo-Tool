import { useEffect, useState, useCallback } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Headers from './component/Headers/Headers';
import Home from './pages/Home/Home';
import Footer from './component/Footers/Footer.jsx';
import Register from './pages/Register/Register.jsx';
import Login from './component/UserRegister/Login.jsx';
import SignUp from './component/UserRegister/SignUp.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Contact from './pages/contact/Contact.jsx';
import User from './pages/User/User.jsx';
import SideBar from './component/sidebar/SideBar.jsx';

function App() {
  const [userData, setUserData] = useState(null);
  const [Isauthenticated, setIsauthenticated] = useState(null);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || { email: '', password: '' });
  
  const navigate = useNavigate();

  const handleLogin = useCallback((values) => {
    const { email, password } = values;
    const UserData = JSON.parse(localStorage.getItem('signUp')) || {};
    console.log("getting from localStorage", UserData);

    if (UserData?.email === email && UserData?.password === password) {
      setIsauthenticated(true);
      localStorage.setItem('Isauthenticated', "true");
      localStorage.setItem('user', JSON.stringify({ email, password }));
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  }, [navigate]);

  const handleLogOut = useCallback(() => {
    localStorage.removeItem('Isauthenticated');
    setIsauthenticated(false);
  }, []);

  useEffect(() => {
    const Userdata = localStorage.getItem('Isauthenticated');
    setIsauthenticated(Userdata === 'true');

    if (Userdata !== 'true') {
      const currentPath = window.location.pathname;
      const publicPaths = ['/login', '/sign-up'];
      if (!publicPaths.includes(currentPath)) {
        navigate('/login');
      }
    }
  }, [Isauthenticated, navigate]);

  return (
    <div>
      <Headers UserData={userData} handleLogOut={handleLogOut} Isauthenticated={Isauthenticated} />
      <div className='main d-flex'>
        {Isauthenticated && (
          <div className='sidebarWrapper'>
            <SideBar />
          </div>
        )}
        <div className='content'>
          <div className='page-content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login handleLogin={handleLogin} user={user} />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/register' element={<Register />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/user' element={<User />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
