import React, {Component} from 'react';
import Options from './Options';
import './FeatureItem.css';

export default class FeatureItem extends Component {
  render() {

    const {feature, idx, selected, features, updateFeature, USCurrencyFormat} = this.props;

    const featureHash = feature + '-' + idx;
    const options = this.props.features[feature].map(item => {
      return (
        <Options
          item={item}
          feature={feature}
          selected={selected}
          features={features}
          updateFeature={updateFeature}
          USCurrencyFormat={USCurrencyFormat} />
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  };
};
