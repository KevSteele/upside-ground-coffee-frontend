import React from 'react';
import ReactDOM from 'react-dom';

function ShoppingCart() {

  console.clear();

  let productList = [
    { name: "OnePoundCoffeeBag", price: 10, info: "One pound of our finest coffee beans" },
  ];

  class Product extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        qty: 0
      };
      this.add = this.add.bind(this);
      this.subtract = this.subtract.bind(this);
      this.showInfo = this.showInfo.bind(this);
    }

    add() {
      this.setState({
        qty: this.state.qty + 1
      });
      this.props.handleTotal(this.props.price);
    }

    subtract() {
      this.setState({
        qty: this.state.qty - 1
      });
      this.props.handleTotal(-this.props.price);
    }

    showInfo() {
      this.props.handleShow(this.props.info);
    }

    render() {
      return (
        <div>
          <div className="row form-group">
            <div className="col-sm-10">
              <h4>{this.props.name}: ${this.props.price}</h4>
            </div>
            <div className="col-sm-2 text-right">qty: {this.state.qty}</div>
          </div>
          <div className="row btn-toolbar">
            <div className="col-6">
              <button className="btn btn-outline-primary" onClick={this.showInfo}>
                show info
            </button>
            </div>
            <div className="col-6 text-right">
              <button className="btn btn-outline-primary" onClick={this.add}>
                +1
            </button>
              <button className="btn btn-outline-primary" onClick={this.subtract} disabled={this.state.qty < 1}>
                -1
            </button>
            </div>
          </div>
          <hr />
        </div>
      );
    }
  }


  class Total extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      let total = this.props.total.toFixed(2);
      let tax = (this.props.total * 0.15).toFixed(2);
      let totalIncTax = (+total + +tax).toFixed(2);
      let mystyle = {
        borderTop: "1px solid #ddd",
        marginTop: "10px"
      };
      return (
        <div style={{ "marginTop": "30px", "backgroundColor": "#F6F6F6", "padding": "10px" }}>
          <h3 className="row" style={{ fontWeight: 400 }}>
            <span className="col-6">total price:</span>
            <span className="col-6 text-right">${total}</span>
          </h3>
          <h3 className="row" style={{ fontWeight: 400 }}>
            <span className="col-6">tax (15%):</span>
            <span className="col-6 text-right">${tax}</span>
          </h3>
          <h3 className="row" style={mystyle}>
            <span className="col-6">tota inc tax:</span>
            <span className="col-6 text-right">${totalIncTax}</span>
          </h3>

        </div>
      );
    }
  }


  // ReactDOM.render(<ProductList />,
  //   document.getElementById("app"));

}

export default ShoppingCart;