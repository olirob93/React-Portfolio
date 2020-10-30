import React from 'react';
import './App.module.scss';
import Navs from './containers/Navs';
import Routes from './containers/Routes';
import library from './data/fa-library';

const App = () => {

  return (
    <>
    <section>
    <Navs/>
    </section>
    <Routes/>

    </>
  );
}

export default App;
