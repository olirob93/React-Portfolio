import React from 'react';
import './App.module.scss';
import library from './data/fa-library';
import MobileNav from './componenets/MobileNav'
import DesktopNav from './componenets/DesktopNav';
import Header from './componenets/Header';
import Bio from './componenets/Bio';

const App = () => {
  return (
    <>
    <section>
      <MobileNav />
      <Header/>
      <DesktopNav/>
    </section>
    </>
  );
}

export default App;
