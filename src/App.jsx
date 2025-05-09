import React from 'react';
import Navbar from './component/navbar';
import Hero from './component/hero';
import Highlights from './component/highlights';
import Model from './component/model';
import Features from './component/features';
import HowItWork from './component/howItWork';

import * as Sentry from "@sentry/react";
import Footer from './component/footer';

const App = () => {

  // return <button onClick={() => methodDoesNotExist()}>Break the world</button>;

  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights/>
      <Model />
      <Features />
      <HowItWork />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);