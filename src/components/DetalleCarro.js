import { Component } from 'react';

const styles = {
  detalleCarro: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: 30,
    boxShadow: '1px 5px 5px rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
    width: '300px',
    right: 50
  },
  ul: {
    margin: 0,
    padding: 0
  },
  producto: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: '1px solid #aaa'
  }
};

class DetalleCarro extends Component {
  render() {
    const { carro } = this.props;

    return (
      <div style={styles.detalleCarro}>
        <ul style={styles.ul}>
          {
            carro.map(carr => (
              <li key={carr.name} style={styles.producto}>
                <img
                  src={carr.img}
                  alt={carr.name}
                  width='50'
                  height='32'
                />
                {carr.name}
                <span>{carr.cantidad}</span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
};

export default DetalleCarro;