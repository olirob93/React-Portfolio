import React from 'react';
import './App.module.scss';
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
