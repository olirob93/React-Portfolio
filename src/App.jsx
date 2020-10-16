import React from 'react';
import './App.module.scss';
import library from './data/fa-library';
import MobileNav from './componenets/MobileNav'
import DesktopNav from './componenets/DesktopNav';

const App = () => {
  return (
    <>
    <main>
    <MobileNav />
    <DesktopNav/>
    </main>
    </>
  );
}

export default App;
