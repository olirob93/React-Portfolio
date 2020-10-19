import React from 'react';
import './App.module.scss';
import library from './data/fa-library';
import Navs from './containers/Navs';
import Routes from './containers/Routes';

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
