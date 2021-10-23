import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Titulo from './components/Titulo';
import NavBar from './components/NavBar';

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/assets/img/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/assets/img/arbejas.jpg' },
      { name: 'Lechuga', price: 1900, img: '/assets/img/lechuga.jpg' }
    ],
    carro: [],
    carroVisible: false
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    const existProd = carro.find(pro => pro.name === producto.name);

    if (existProd) {
      const newCarro = carro.map(pro => {
        if (pro.name === producto.name) {
          return {
            ...pro,
            cantidad: pro.cantidad + 1
          };
        } else {
          return pro;
        }
      });

      this.setState({
        carro: newCarro
      });

    } else {
      this.setState(
        {
          carro: this.state.carro.concat({
            ...producto,
            cantidad: 1
          })
        }
      );
    }
  };

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return;
    }

    this.setState({
      carroVisible: !this.state.carroVisible
    });
  };

  render() {
    return (
      <div>
        <NavBar
          carro={this.state.carro}
          visibleDetalle={this.state.carroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Titulo />
          <Productos
            productos={this.state.productos}
            agregarAlCarro={this.agregarAlCarro}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
