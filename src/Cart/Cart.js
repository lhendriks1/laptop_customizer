import React, {Component} from 'react';
import Summary from './Summary';
import './Cart.css';

export default class Cart extends Component {
  render() {
    const {USCurrencyFormat, feature, selected} = this.props;

    const total = Object.keys(selected).reduce(
      (acc, curr) => acc + selected[curr].cost,
      0
    );

    const summary = Object.keys(selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = selected[feature];

      return (
        <Summary
          feature={feature}
          selectedOption={selectedOption}
          featureHash={featureHash}
          USCurrencyFormat={USCurrencyFormat}/>
      );
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>
    );
  };
};
