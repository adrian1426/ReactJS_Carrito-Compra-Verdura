import { Component } from 'react';

class ProductoItem extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props;
    return (
      <div>
        <img src={producto.img} alt={producto.name} />
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
      </div>
    );
  }
};

export default ProductoItem;