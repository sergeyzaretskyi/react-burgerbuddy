import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart/Cart';
import { User } from './pages/User';
import { Service } from './pages/Service';
import { NotFound } from './pages/NotFound';

export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
};
