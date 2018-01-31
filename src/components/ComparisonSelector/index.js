import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import glamorous, {ThemeProvider} from 'glamorous';

// Currency comparison selector
// const ComparisonSelectorStyles = glamorous.div({
//   display: 'inline-block',
//   marginLeft: 'auto',
// });

/**
 * ComparisonSelector component for selecting what things to compare to each other.
 */
class ComparisonSelector extends Component {
  static propTypes = {
    /** Base currency in the comparison. */
    fromCurrency: PropTypes.string,
    /** Other currency to compare the base currency with. */
    toCurrency: PropTypes.string
  }
  static defaultProps = {
    fromCurrency: 'EUR',
    toCurrency: 'USD'
  }

  render() {
    return (
      <div>
        from {this.props.fromCurrency} to [{this.props.toCurrency}]
      </div>
    );
  }
}

export default ComparisonSelector;
