import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import Header from './components/header/header';
import Home from './pages/home/home';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Home />
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
