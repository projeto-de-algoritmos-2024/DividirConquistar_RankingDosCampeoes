import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Parabens() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img
          src="campo-de-futebol.png"
          alt="Futebol Icon"
          style={styles.logo}
        />
        <h1 style={styles.title}>PARABÉNS!</h1>
      </div>
      <div style={styles.content}>
        <p style={styles.text}>
          Você conseguiu ordenar todos os times corretamente!
        </p>
        <button
          style={styles.button}
          onClick={() => navigate('/')}
        >
          Jogar novamente
        </button>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    fontFamily: "Montserrat, sans-serif",
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#0d192b', 
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  logo: {
    marginTop: '20px',
    width: '85px',
    height: '85px',
  },
  title: {
    fontSize: '32px',
    color: '#07f9a2',
    fontWeight: 'bold',
    borderBottom: '1px solid #07f9a2',
    padding: '10px',

  },
  content: {
    maxWidth: '800px',
    width: '100%',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    color: '#333',
  },
  text: {
    fontSize: '18px',
    color: '#34495e',
    lineHeight: '1.6',
    marginBottom: '15px',
    textAlign: 'center',
  },
  button: {
    padding: '12px 24px',
    fontSize: '18px',
    backgroundColor: '#0c5149',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '20px',
  },
};
