import React, {Component} from 'react';
import MainForm from './MainForm/MainForm';
import Cart from './Cart/Cart';
import './App.css';

export default class App extends Component {
  state = {
    selected: {
      'Processor': {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      'Display': {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const {features} = this.props;
    const {selected} = this.state;

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <MainForm
            features={features}
            selected={selected}
            updateFeature={this.updateFeature}
            USCurrencyFormat={this.USCurrencyFormat}/>
          <Cart
            selected={selected}
            USCurrencyFormat={this.USCurrencyFormat}/>
        </main>
      </div>
    );
  };
};
