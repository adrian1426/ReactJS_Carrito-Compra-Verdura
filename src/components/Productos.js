import { Component } from 'react';
import ProductoItem from './ProductoItem';

class productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;

    return (
      <div>
        {
          productos.map(product => (
            <ProductoItem
              agregarAlCarro={agregarAlCarro}
              key={product.name}
              producto={product}
            />
          ))
        }
      </div>
    );
  }
};

export default productos;