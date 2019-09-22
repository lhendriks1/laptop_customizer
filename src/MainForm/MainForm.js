import React, {Component} from 'react';
import FeatureItem from './FeatureItem';
import './MainForm.css';

export default class MainForm extends Component {
  render() {

    const {selected, updateFeature, USCurrencyFormat} = this.props;
    const features = Object.keys(this.props.features)
      .map((feature, idx) => {
        return (
          <FeatureItem
            idx={idx}
            feature={feature}
            features = {this.props.features}
            selected={selected}
            updateFeature={updateFeature}
            USCurrencyFormat={USCurrencyFormat}/>
        );
      });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
          {features}
      </form>
    );
  };
};
