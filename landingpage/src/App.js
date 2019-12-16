import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

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

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import ScrollToTop from './ScrollToTop';

const history = createBrowserHistory();
// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class App extends React.Component {
	componentDidMount() {
    AOS.init({
			duration : 800
    });
  }
	
	render() {
    return (
			<Router>
				<ScrollToTop>
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
				</ScrollToTop>
			</Router>
    );
  }
}

export default App;
