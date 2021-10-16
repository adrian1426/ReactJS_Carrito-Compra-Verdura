import { Component } from 'react';
import ProductoItem from './ProductoItem';

const styles = {
  productos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};

class productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;

    return (
      <div style={styles.productos}>
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