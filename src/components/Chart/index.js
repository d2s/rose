import React, { Component } from 'react';
// aimport ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import PropTypes from 'prop-types';
import glamorous, {ThemeProvider} from 'glamorous';

// Load required components from other directories


/**
 * Example data
 * 
 * - http://fixer.io/
 * - https://api.fixer.io/2018-01-24
 * - https://api.fixer.io/2018-01-30
 */
const data = [
  // {date: '2018-01-30', USD: 1.2421}
  {date: 1, USD: 1.2352},
  {date: 2, USD: 1.2407},
  {date: 3, USD: 1.2436},
  {date: 4, USD: 1.2436},
  {date: 5, USD: 1.2436},
  {date: 6, USD: 1.2379},
  {date: 7, USD: 1.2421}
];


// Chart content wrapper
const ChartWrapper = glamorous.div({
  backgroundColor: '#fff',
  color: '#000'
});


/**
 * Chart component for displaying chart data content.
 */
class Chart extends Component {
  static propTypes = {
    /** Text string for the Chart title, with a fallback defaultProps text if not specified. */
    title: PropTypes.string,
    /** Chart content. */
    content: PropTypes.any
  }
  static defaultProps = {
    title: 'Chart title',
    content: null
  }

  render() {
    return (
      <ChartWrapper>
        {/* {this.props.title} */}
        {/* {this.props.content} */}

        {/* // renders the default component with fallback data */}
        <VictoryChart
          domainPadding={30}
          theme={VictoryTheme.material}
          height={200}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7]}
            // tickValues={[1, 2, 3, 4, 5, 6, 7]}
            // tickFormat={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
            // label="Weekday"
            padding={{ top: 20, bottom: 20 }}
            style={{
              ticks: {stroke: "grey", size: 5},
              tickLabels: {fontSize: 6, padding: 5}
            }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`$${x}`)}
            style={{
              ticks: {stroke: "grey", size: 5},
              tickLabels: {fontSize: 6, padding: 5}
            }}
          />
          <VictoryBar
            data={data}
            x="date"
            y="USD"
            labels={(d) => `${d.y}`}             
            barRatio={0.6}
            style={{
              labels: {
                fontSize: 7,
              },
            }}
          />
        </VictoryChart>
      </ChartWrapper>
    );
  }
}

export default Chart;
