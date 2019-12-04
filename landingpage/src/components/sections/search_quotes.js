import React from 'react';

class SearchQuotes extends React.Component {
  render() {
    return (
      <section className="ftco-section ftco-no-pb goto-here">
        <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="search-wrap-1 ftco-animate">
              <form action="#" className="search-property-1">
                <div className="row">
                  <div className="col-lg align-items-end">
                    <div className="form-group">
                      <label htmlFor="#">Investment Amount</label>
                      <div className="form-field">
                      {/* <!-- <div className="icon"><span className="ion-ios-search"></span></div> --> */}
                        <div className="icon">$</div>
                        <input type="text" className="form-control" placeholder="50,000"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg align-items-end">
                    <div className="form-group">
                      <label htmlFor="#">State</label>
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                          <select defaultValue="California" name="" id="" className="form-control">
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option>
                            <option value="Florida">Florida</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky">Kentucky</option>
                            <option value="Louisiana">Louisiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Massachusetts">Massachusetts</option>
                            <option value="Michigan">Michigan</option>
                            <option value="Minnesota">Minnesota</option>
                            <option value="Mississippi">Mississippi</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option>
                            <option value="New Jersey">New Jersey</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Rhode Island">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont">Vermont</option>
                            <option value="Virginia">Virginia</option>
                            <option value="Washington">Washington</option>
                            <option value="West Virginia">West Virginia</option>
                            <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg align-items-end">
                    <div className="form-group">
                      <label htmlFor="#">Investment Term</label>
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                          <select defaultValue="5" name="" id="" className="form-control">
                            <option value="3">3 years</option>
                            <option value="4">4 years</option>
                            <option value="5">5 years</option>
                            <option value="6">6 years</option>
                            <option value="7">7 years</option>
                            <option value="8">8 years</option>
                            <option value="9">9 years</option>
                            <option value="10">10 years</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg align-self-end">
                    <div className="form-group">
                      <div className="form-field">
                        <input type="submit" value="Search Quotes" className="form-control btn btn-primary"/>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </section>
    )
  }
}

export default SearchQuotes;
