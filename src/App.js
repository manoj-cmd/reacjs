import React from 'react';
import Header from './Header';
import Classes from './Classes';
import Welcome from './Welcome';
import Testimonials from './Testimonials';
import Footer from './Footer';
import About from './About'
import {BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
    <div className="App">
     
	<Header />
	<Classes />
	<Welcome />
	<Testimonials />
	<Footer />
<switch>
	<Route path="/About" Component={About} />
</switch>	

    </div>
	
	</BrowserRouter>
	
  );
}

export default App;
