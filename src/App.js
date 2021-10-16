import { Component } from 'react';
import Productos from './components/Productos';

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/assets/img/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/assets/img/arbejas.jpg' },
      { name: 'Lechuga', price: 1900, img: '/assets/img/lechuga.jpg' }
    ]
  };

  render() {
    return (
      <div>
        <Productos
          productos={this.state.productos}
          agregarAlCarro={() => console.log('click func prod')}
        />
      </div>
    );
  }
}

export default App;
