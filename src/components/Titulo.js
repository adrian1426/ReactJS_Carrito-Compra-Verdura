import { Component } from 'react';

const styles = {
  title: {
    marginBottom: '30px'
  }
};

class Titulo extends Component {
  render() {
    return (
      <h1 style={styles.title}>Tienda verduras frescas</h1>
    );
  }
};

export default Titulo;