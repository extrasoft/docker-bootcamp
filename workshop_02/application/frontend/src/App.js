import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/products').then((res) => {
      // console.log(res)
      this.setState({ products: res.data})
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.products && this.state.products.map((res, i) => {
            return (
              <div key={i}>
                <h2>{res.productName}</h2>
                <p>{res.unitPrice}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
