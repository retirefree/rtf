import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import QuoteBlockSection from './components/sections/quote_block';
import NavBarSection from './components/sections/navbar';
import FooterSection from './components/sections/footer';

import Home from './components/Home';
import Quotes from './components/Quotes';
import School from './components/School';
import Contact from './components/Contact';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
    AOS.init({
			duration : 800
    });
  }
	
	render() {
    return (
			<Router>
				<div className="App" data-aos='fade-up'>
					<QuoteBlockSection/>
					<NavBarSection/>
					<Switch>
							<Route exact path='/' component={Home} />
              <Route path='/quotes' component={Quotes} />
              <Route path='/school' component={School} />
							<Route path='/contact' component={Contact} />
					</Switch>
					<FooterSection/>
					<div 
						id="ftco-loader" 
						className="show fullscreen">
						<svg className="circular" width="48px" height="48px">
							<circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee"/>
							<circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00"/>
						</svg>
					</div>
				</div>
			</Router>
    );
  }
}

export default App;
