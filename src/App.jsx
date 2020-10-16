import React from 'react';
import './App.module.scss';
import library from './data/fa-library';
import MobileNav from './componenets/MobileNav'
import DesktopNav from './componenets/DesktopNav';
import Header from './componenets/Header';

const App = () => {
  return (
    <>
    <main>
    <MobileNav />
    <Header/>
    <DesktopNav/>
    </main>
    </>
  );
}

export default App;
