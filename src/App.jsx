import React from 'react';
import Navbar from './component/navbar';
import Hero from './component/hero';
import Highlights from './component/highlights';
import Model from './component/model';

import * as Sentry from "@sentry/react";

const App = () => {

  // return <button onClick={() => methodDoesNotExist()}>Break the world</button>;

  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model />
    </main>
  )
}

export default Sentry.withProfiler(App);