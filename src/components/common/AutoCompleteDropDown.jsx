/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import LOADER from '../../assets/loader.svg';

class AutoCompleteDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      showResults: false,
      results: []
    };
  }

  toggleResultsDropdown = (showResults) => {
    this.setState({
      showResults
    });
  }

  getResults = (event) => {
    // TASK 3: AUTOCOMPLETE DROPDOWN    
    // On input, Make a GET request to the server, passing
    // the value(s) entered as a query param. i.e
    // GET <BASE_URL>/api/providers?q={input}
    // Use the response to populate the dropdown.
  }

  onResultSelected = (selectedResult) => {
    const { onResultSelected } = this.props;
    if (onResultSelected) {
      onResultSelected(selectedResult.id);
    }
  }

  render() {
    const { showResults, results, isLoading } = this.state;
    const { customListComponent, placeholder } = this.props;
    return (
      <div className="dropdown active autocomplete-dropdown">
        <input
          type="text"
          className="input__style_1 input__search"
          placeholder={placeholder || "&#xf002; Find a Provider"}
          onInput={this.getResults}
          onChange={this.getResults}
          onFocus={() => this.toggleResultsDropdown(true)}
          onBlur={() => this.toggleResultsDropdown(false)}
        />
        {isLoading && <img src={LOADER} className="loader" alt="loading" />}
        {showResults && (
          customListComponent ? (
            <div className="dropdown-menu">
              {React.createElement(
                customListComponent,
                {
                  providers: results,
                  onResultSelected: this.onResultSelected
                }
              )}
            </div>
          ) : (
            <ul className="dropdown-menu">
              {results.map(result => (
                <li
                  key={result.id}
                  onMouseDown={() => this.onResultSelected(result)}
                >
                  {result.name}
                </li>
              ))}
            </ul>
          ))
        }
      </div>
    );
  }
}

AutoCompleteDropDown.propTypes = {
  placeholder: PropTypes.string,
  onResultSelected: PropTypes.instanceOf(Function).isRequired,
  customListComponent: PropTypes.instanceOf(Object),
};

export default AutoCompleteDropDown;
