import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Loginpage } from './pages/Loginpage';
import { Registerpage } from './pages/Registerpage';
import { NotFoundpage } from './pages/NotFoundpage';
import { Downloadpage } from './pages/downloadpage';
import { Profilepage } from './pages/Profilepage';
import { Flowspage } from './pages/Flowspage';

export const My_Routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/flows" element={<Flowspage />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/client.apk" element={<Downloadpage />} />
        <Route path="*" element={<NotFoundpage />} />
      </Routes>
    </Router>
  );
}