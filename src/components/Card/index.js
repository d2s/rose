import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous, {ThemeProvider} from 'glamorous';

// Load required components from other directories
// import ComparisonSelector from '../ComparisonSelector';


// CardWrapper
const CardWrapper = glamorous.div({
  backgroundColor: '#fff',
  color: '#000',
  padding: 0,
  textAlign: 'left',
  margin: 10,
  borderRadius: 5,
  borderColor: '#000',
  borderWidth: 1,
  borderStyle: 'solid'
});

// Header wrapper
const CardHeader = glamorous.header({
  backgroundColor: 'gray',
  color: '#000',
  padding: 0,
  display: 'block',
  width: 'auto',
  textAlign: 'left'
});

// h1 Main title
const CardTitle = glamorous.h1({
  backgroundColor: '#222',
  color: '#fff',
  width: 'auto',
  padding: 15,
  margin: 0,
  display: 'inline-block',
  fontSize: '1.2em',
  fontWeight: 500
});

// Card content wrapper
const CardContent = glamorous.div({
  backgroundColor: '#fff',
  color: '#000',
  padding: 10,
  display: 'block',
  width: 'auto',
  textAlign: 'left',
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5
});

/**
 * Card component for displaying application's data content.
 */
class Card extends Component {
  static propTypes = {
    /** Text string for the card title, with a fallback defaultProps text if not specified. */
    title: PropTypes.string,
    /** Card content, with a fallback defaultProps if not specified. */
    content: PropTypes.any
  }
  static defaultProps = {
    title: 'Card title',
    content: null
  }

  render() {
    return (
      <CardWrapper>
        <CardHeader>
          <CardTitle>
            {this.props.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {this.props.children}
        </CardContent>
      </CardWrapper>
    );
  }
}

export default Card;
