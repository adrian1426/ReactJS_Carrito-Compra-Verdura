import { Component } from 'react';
import BubbleAler from './BubbleAlert';

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
    return (
      <div>
        <span style={styles.bubble}>
          <BubbleAler />
        </span>
        <button style={styles.carro}>Carro</button>
      </div>
    );
  }
};

export default Carro;