import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { countInversions } from '../utils/countInversions.tsx';
import { CSSProperties } from 'react';


const Jogando = () => {

  const classificacao = {
    "2024": [
      "Botafogo", "Palmeiras", "Flamengo", "Fortaleza", "Internacional", "São Paulo", "Corinthians", "Bahia", "Cruzeiro", "Vasco da Gama", "EC Vitória", "Atlético-MG", "Fluminense", "Grêmio", "Juventude", "Bragantino", "Athletico-PR", "Criciúma", "Atlético-GO", "Cuiabá"
    ],
    "2023": [
      "Palmeiras", "Grêmio", "Atlético-MG", "Flamengo", "Botafogo",
      "Red Bull Bragantino", "Fluminense", "Athletico-PR", "Internacional", 
      "Fortaleza", "São Paulo", "Cuiabá", "Corinthians", "Cruzeiro", "Vasco", 
      "Bahia", "Santos", "Goiás", "Coritiba", "América-MG"
    ],
    "2022": [
      "Palmeiras", "Internacional", "Fluminense", "Corinthians", "Flamengo",
      "Athletico-PR", "Atlético-MG", "Fortaleza", "São Paulo", "América-MG", 
      "Botafogo", "Santos", "Goiás", "RB Bragantino", "Coritiba", "Cuiabá", 
      "Ceará", "Atlético-GO", "Avaí", "Juventude"
    ],
    "2021": [
      "Atlético-MG", "Flamengo", "Palmeiras", "Fortaleza", "Corinthians", 
      "Red Bull Bragantino", "Fluminense", "América-MG", "Atlético-GO", 
      "Santos", "Ceará", "Internacional", "São Paulo", "Athletico-PR", 
      "Cuiabá", "Juventude", "Grêmio", "Bahia", "Sport", "Chapecoense"
    ],
    "2020": [
      "Flamengo", "Internacional", "Atlético-MG", "São Paulo", "Fluminense", 
      "Grêmio", "Palmeiras", "Santos", "Athletico-PR", "RB Bragantino", 
      "Ceará", "Corinthians", "Atlético-GO", "Bahia", "Sport", "Fortaleza", 
      "Vasco", "Goiás", "Coritiba", "Botafogo"
    ],
    "2019": [
    "Flamengo",
    "Santos",
    "Palmeiras",
    "Grêmio",
    "Athletico-PR",
    "São Paulo",
    "Internacional",
    "Corinthians",
    "Fortaleza",
    "Goiás",
    "Bahia",
    "Vasco",
    "Atlético-MG",
    "Fluminense",
    "Botafogo",
    "Ceará",
    "Cruzeiro",
    "CSA",
    "Chapecoense",
    "Avaí"
  ],
    "2018": [
    "Palmeiras",
    "Flamengo",
    "Internacional",
    "Grêmio",
    "São Paulo",
    "Atlético-MG",
    "Athletico-PR",
    "Cruzeiro",
    "Botafogo",
    "Santos",
    "Bahia",
    "Fluminense",
    "Corinthians",
    "Chapecoense",
    "Ceará",
    "Vasco",
    "América-MG",
    "Sport",
    "Vitória",
    "Paraná"
  ],
    "2017": [
    "Corinthians",
    "Palmeiras",
    "Santos",
    "Grêmio",
    "Cruzeiro",
    "Flamengo",
    "Vasco",
    "Chapecoense",
    "Atlético-MG",
    "Botafogo",
    "Atlético-PR",
    "Bahia",
    "São Paulo",
    "Fluminense",
    "Sport",
    "Vitória",
    "Coritiba",
    "Avaí",
    "Ponte Preta",
    "Atlético-GO"
  ],
    "2016": [
    "Palmeiras",
    "Santos",
    "Flamengo",
    "Atlético-MG",
    "Botafogo",
    "Atlético-PR",
    "Corinthians",
    "Ponte Preta",
    "Grêmio",
    "São Paulo",
    "Chapecoense",
    "Cruzeiro",
    "Fluminense",
    "Sport",
    "Coritiba",
    "Vitória",
    "Internacional",
    "Figueirense",
    "Santa Cruz-PE",
    "América-MG"
  ],
  "2015": [
    "Corinthians",
    "Atlético-MG",
    "Grêmio",
    "São Paulo",
    "Internacional",
    "Sport",
    "Santos",
    "Cruzeiro",
    "Palmeiras",
    "Athletico-PR",
    "Ponte Preta",
    "Flamengo",
    "Fluminense",
    "Chapecoense",
    "Coritiba",
    "Figueirense",
    "Avaí",
    "Vasco",
    "Goiás",
    "Joinville"
  ],
    "2014": [
    "Cruzeiro",
    "São Paulo",
    "Internacional",
    "Corinthians",
    "Atlético (MG)",
    "Fluminense",
    "Grêmio",
    "Atlético (PR)",
    "Santos",
    "Flamengo",
    "Sport",
    "Goiás",
    "Figueirense",
    "Coritiba",
    "Chapecoense",
    "Palmeiras",
    "Vitória",
    "Bahia",
    "Botafogo",
    "Criciúma"
  ],
    "2013": [
    "Cruzeiro",
    "Grêmio",
    "Athletico-PR",
    "Botafogo",
    "Vitória",
    "Goiás",
    "Santos",
    "Atlético-MG",
    "São Paulo",
    "Corinthians",
    "Coritiba",
    "Bahia",
    "Internacional",
    "Criciúma",
    "Fluminense",
    "Flamengo",
    "Portuguesa",
    "Vasco",
    "Ponte Preta",
    "Náutico"
  ],
    "2012": [
    "Fluminense",
    "Atlético-MG",
    "Grêmio",
    "São Paulo",
    "Vasco",
    "Corinthians",
    "Botafogo",
    "Santos",
    "Cruzeiro",
    "Internacional",
    "Flamengo",
    "Náutico",
    "Coritiba",
    "Ponte Preta",
    "Bahia",
    "Portuguesa",
    "Sport",
    "Palmeiras",
    "Atlético-GO",
    "Figueirense"
  ],
    "2011": [
    "Corinthians",
    "Vasco",
    "Fluminense",
    "Flamengo",
    "Internacional",
    "São Paulo",
    "Figueirense",
    "Coritiba",
    "Botafogo",
    "Santos",
    "Palmeiras",
    "Grêmio",
    "Atlético-GO",
    "Bahia",
    "Atlético",
    "Cruzeiro",
    "Atlético-PR",
    "Ceará",
    "América",
    "Avaí"
  ],
    "2010": [
    "Fluminense",
    "Cruzeiro",
    "Corinthians",
    "Grêmio",
    "Athletico",
    "Botafogo",
    "Internacional",
    "Santos",
    "São Paulo",
    "Palmeiras",
    "Vasco",
    "Ceará",
    "Atlético-MG",
    "Flamengo",
    "Avaí",
    "Atlético-GO",
    "Vitória",
    "Guarani",
    "Goiás",
    "Grêmio Barueri"
  ]
  };

  const { year } = useParams();
  const navigate = useNavigate();
  const [shuffledData, setShuffledData] = useState<string[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [inversionCount, setInversionCount] = useState(0);
  const [moveCount, setMoveCount] = useState(0);

  useEffect(() => {
    if (year) {
      const shuffledData = [...classificacao[year]].sort(() => Math.random() - 0.5);
      setShuffledData(shuffledData);
      setInversionCount(countInversions(classificacao[year], shuffledData));
    }
  }, [year]);

  const selectItem = (index: number) => {
    if (selectedIndices.length < 2 && !selectedIndices.includes(index)) {
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  const moveItem = (index: number, direction: 'up' | 'down') => {
    const newShuffledData = [...shuffledData];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;

    if (swapIndex >= 0 && swapIndex < shuffledData.length) {
      [newShuffledData[index], newShuffledData[swapIndex]] = [newShuffledData[swapIndex], newShuffledData[index]];
      setShuffledData(newShuffledData);

      const currentInversions = countInversions(classificacao[year || 0], newShuffledData);
      setInversionCount(currentInversions);
      setMoveCount(prevCount => prevCount + 1);

      if (currentInversions === 0) {
        const completedYears = JSON.parse(localStorage.getItem('completedYears') || '[]');
        localStorage.setItem('completedYears', JSON.stringify([...completedYears, year]));
        navigate('/parabens');
      }
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>ORDENE OS TIMES</h1>
        <div style={styles.inversionCount}>
          <p>Inversões: {inversionCount}</p>
          <p>Movimentos: {moveCount}</p>
        </div>
      </header>

      <main>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Posição</th>
              <th style={styles.tableHeader}>Time</th>
              <th style={styles.tableHeader}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {shuffledData.map((team, index) => (
              <tr key={team} style={styles.tableRow}>
                <td style={styles.tableCell}>{index + 1}</td>
                <td style={styles.tableCell}>{team}</td>
                <td style={styles.tableCell}>
                  <button
                    style={styles.actionButton}
                    onClick={() => moveItem(index, 'up')}
                    disabled={index === 0}
                  >
                    ↑ Subir
                  </button>
                  <button
                    style={styles.actionButton}
                    onClick={() => moveItem(index, 'down')}
                    disabled={index === shuffledData.length - 1}
                  >
                    ↓ Descer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: 'Montserrat, sans-serif',
    backgroundColor: '#0d192b', 
    minHeight: '100vh',
  },
  header: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  title: {
    padding: '10px',
    fontSize: '2rem',
    marginBottom: '10px',
    color: '#07f9a2',
    borderBottom: '1px solid #07f9a2',
  },
  inversionCount: {
    padding: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    color: '#07f9a2',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '10px',
    width: '100%',
    maxWidth: '600px',
  },
  card: {
    padding: '20px',
    backgroundColor: '#09c184',
    color: '#0a8967',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s, background-color 0.2s',
    minWidth: '100px',
  },
  cardHover: {
    transform: 'scale(1.05)',
    backgroundColor: '#0a8967', 
    color: '#07f9a2',
  },
  swapButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#0c5149', 
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  swapButtonHover: {
    backgroundColor: '#07f9a2', 
  },
  tableContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
    width: '100%',
    maxWidth: '600px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#09c184',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  tableHeader: {
    padding: '10px',
    backgroundColor: '#0a8967',
    color: '#07f9a2',
    textAlign: 'center',
    fontWeight: 'bold',
    borderBottom: '2px solid #07f9a2',
  },
  tableRow: {
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  tableCell: {
    padding: '10px',
    textAlign: 'center',
    borderBottom: '1px solid #07f9a2',
  },
  actionButton: {
    padding: '5px 10px',
    margin: '0 5px',
    fontSize: '0.9rem',
    color: '#0c5149',
    backgroundColor: '#07f9a2',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  
};

export default Jogando;
