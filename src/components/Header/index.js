import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous, {ThemeProvider} from 'glamorous'

// Load required components from other directories
import ComparisonSelector from '../ComparisonSelector';


// Header wrapper
const AppHeader = glamorous.header({
  backgroundColor: '#000',
  color: '#fff',
  padding: 10,
  textAlign: 'left',
});

// h1 Main title
const AppTitle = glamorous.h1({
  backgroundColor: '#222',
  width: 'auto',
  padding: 15,
  margin: 0,
  display: 'inline-block',
  fontSize: '1.4em',
  fontWeight: 500,
  marginRight: '20px',
  '@media(max-width: 480px)': {
    width: 160,
  },
});

/**
 * Header component for application's main navigation etc.
 */
class Header extends Component {
  static propTypes = {
    /** Name of the application. */
    title: PropTypes.string
  }
  static defaultProps = {
    title: 'Currency Exchange'
  }

  render() {
    return (
      <AppHeader>
        <AppTitle>
          {this.props.title}
        </AppTitle>
        <ComparisonSelector />
      </AppHeader>
    );
  }
}

export default Header;
