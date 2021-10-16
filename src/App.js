import { Component } from 'react';

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
        <p>Hola mundo</p>
      </div>
    );
  }
}

export default App;
