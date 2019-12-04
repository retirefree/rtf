import React, { Component } from 'react';
import ServicesSection from './sections/services_offer';
import TestimonialsSection from './sections/testimonials';
import HeroSection from './sections/hero';
import SearchQuotesSection from './sections/search_quotes';
import AnnuitySchoolSection from './sections/annuity_school';
import { withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
        <div>
          <HeroSection/>
          <SearchQuotesSection history={this.props.history}/>
          <AnnuitySchoolSection/>
          <ServicesSection/>
          <TestimonialsSection/>
        </div>
    );
  }
}

export default withRouter(Home);
