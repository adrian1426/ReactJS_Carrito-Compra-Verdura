import { Component } from 'react';

const styles = {
  button: {
    backgroundColor: '#0A283E',
    color: '#FFFFFF',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

class ButtonAgregar extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button
        style={styles.button}
        onClick={onClick}
      >
        {this.props.children}
      </button>
    );
  }
};

export default ButtonAgregar;