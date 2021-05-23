import React from 'react';

class Search extends React.PureComponent {
  render() {
    return (
      <div className="where_togo_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="form_area">
                <h3>What are you looking for?</h3>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="search_wrap">
                <form className="search_form" action="#">
                  <div className="input_field">
                    <input type="text" placeholder="Place for how much of people?" />
                  </div>
                  <div className="input_field">
                    <input id="datepicker" placeholder="Date" />
                  </div>
                  <div className="input_field">
                    <select>
                      <option data-display="Travel type">Travel type</option>
                      <option value="1">Some option</option>
                      <option value="2">Another option</option>
                    </select>
                  </div>
                  <div className="search_btn">
                    <button className="boxed-btn4 " type="submit">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
