import React, {Component} from 'react';
import slugify from 'slugify';
import './Options.css';


export default class Options extends Component {
  render() {
    const {feature, item, selected, updateFeature, USCurrencyFormat} = this.props;
    const itemHash = slugify(JSON.stringify(item));

    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === selected[feature].name}
          onChange={e => updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  };
};
