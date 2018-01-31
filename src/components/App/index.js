import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous, {ThemeProvider} from 'glamorous'
import XRay from 'react-x-ray'; // Layout debugging tools

// Load required components from other directories
import Header from '../Header';
import Card from '../Card';
import Chart from '../Chart';



// Wrapper element for the App component
const AppWrapper = glamorous.div({
  fontSize: 18,
  textAlign: 'center'
});

// App content wrapper
const ContentWrapper = glamorous.div({
  backgroundColor: '#fff',
  color: '#000',
  padding: 0,
  display: 'block',
  width: 'auto',
  textAlign: 'left'
});

/**
 * App component
 */
class App extends Component {
  static propTypes = {
    /** Name of the application. */
    title: PropTypes.string,
    /** Pack of cards. */
    cards: PropTypes.any
  }
  static defaultProps = {
    title: 'Currency Exchange',
    cards: [
      'Current Rate',
      '7d History',
      '30d History',
    ]
  }

  render() {
    return (
      <XRay disabled="true" backgroundColor="#000">
        <AppWrapper>
          <Header title={this.props.title} />
          <ContentWrapper>
            {this.props.cards.map(card =>
              <Card key={card} title={card}>
                <Chart />
              </Card>
            )}
          </ContentWrapper>
        </AppWrapper>
      </XRay>
    );
  }
}

export default App;
