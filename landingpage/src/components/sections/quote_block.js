import React from 'react';

class QuoteBlock extends React.Component {
    render() {
      return (
        <section className="quote-block ftco-counter ftco-section ftco-no-pt ftco-no-pb img" id="section-counter">
            <div className="container">
                <div className="row">
                <div className="col-md-6 col-lg-4 justify-content-center counter-wrap ftco-animate">
                    <div className="block-18">
                        <div className="text text-border d-flex justify-content-left align-items-center">
                        <strong className="number">Fixed Annuity</strong>
                        <span>best rates</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-2 justify-content-center counter-wrap ftco-animate">
                    <div className="block-18">
                        <div className="text text-border d-flex align-items-center">
                        <strong className="number" data-number="2.70">2.70%</strong>
                        <span>3 year</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-2 justify-content-center counter-wrap ftco-animate">
                    <div className="block-18">
                        <div className="text text-border d-flex align-items-center">
                        <strong className="number" data-number="2.55">2.55%</strong>
                        <span>5 year</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-2 justify-content-center counter-wrap ftco-animate">
                        <div className="block-18">
                            <div className="text text-border d-flex align-items-center">
                            <strong className="number" data-number="3.90">3.90%</strong>
                            <span>7 year</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 justify-content-center counter-wrap ftco-animate">
                        <div className="block-18">
                            <div className="text d-flex align-items-center">
                            <strong className="number" data-number="3.89">3.89%</strong>
                            <span>10 year</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
    }
}

export default QuoteBlock;
