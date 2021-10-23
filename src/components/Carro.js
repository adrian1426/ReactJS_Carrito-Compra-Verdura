import { Component } from 'react';
import BubbleAler from './BubbleAlert';
import DetalleCarro from './DetalleCarro';

const styles = {
  carro: {
    backgroundColor: '#359A2C',
    color: '#FFFFFF',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer'
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20
  }
};

class Carro extends Component {
  render() {
    const { carro } = this.props;
    const cantidad = carro.reduce((accumulate, element) => accumulate + element.cantidad, 0);

    return (
      <div>
        <span style={styles.bubble}>
          {cantidad > 0 && <BubbleAler value={cantidad} />}
        </span>
        <button style={styles.carro}>Carro</button>
        <DetalleCarro carro={carro} />
      </div>
    );
  }
};

export default Carro;