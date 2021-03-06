import { Component } from 'react';
import Carro from './Carro';
import Logo from './Logo';

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0 50px',
    boxShadow: '0 2px 3px rgba(0,0,0,0.1)',
    background: '#B8DFD8'
  }
};

class NavBar extends Component {
  render() {
    const { carro, visibleDetalle, mostrarCarro } = this.props;

    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carro {...{ carro, visibleDetalle, mostrarCarro }} />
      </nav>
    );
  }
};

export default NavBar;