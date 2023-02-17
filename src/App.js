import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import Header from './components/header/header';
import Home from './pages/home/home';
import Footer from './components/footer/footer';
import Classification from './components/classification/classification';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Home />
      <Classification />
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
