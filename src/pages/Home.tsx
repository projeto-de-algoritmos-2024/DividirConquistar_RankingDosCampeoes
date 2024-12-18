import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [completedYears, setCompletedYears] = useState<number[]>([]);
  const years = Array.from({ length: 15 }, (_, i) => 2010 + i);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCompletedYears = localStorage.getItem('completedYears');
    if (storedCompletedYears) {
      setCompletedYears(JSON.parse(storedCompletedYears).map(Number));
    }
  }, []);

  const handleYearClick = (year: number) => {
    navigate(`/jogo/${year}`);
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      padding: '20px',
      backgroundColor: '#0d192b',
      fontFamily: "Montserrat, sans-serif",
      color: '#fff',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    icon: {
      marginTop: '20px',
      width: '85px',
      height: '85px',
    },
    title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#07f9a2',
    borderBottom: '1px solid #07f9a2',
    padding: '10px',
    },
    yearsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 100px))',
      gap: '15px',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '600px',
      
    },
    yearButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90px',
      height: '90px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#09c184',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'transform 0.2s, background-color 0.2s',
      position: 'relative',
    },
    yearButtonCompleted: {
      backgroundColor: '#0c5149', 
    },
    yearButtonHover: {
      transform: 'scale(1.05)',
    },
    checkIcon: {
      position: 'absolute',
      top: '5px',
      right: '5px',
      fontSize: '16px',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src="campo-de-futebol.png" alt="Futebol Icon" style={styles.icon} />
        <h1 style={styles.title}>RANKING DOS CAMPEÕES</h1>
      </header>
      <main style={styles.yearsGrid}>
        {years.map((year) => (
          <button
            key={year}
            style={{
              ...styles.yearButton,
              ...(completedYears.includes(year) ? styles.yearButtonCompleted : {}),
            }}
            onClick={() => handleYearClick(year)}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = styles.yearButtonHover.transform || '')
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = '')}
          >
            {year}
            {completedYears.includes(year) && <span style={styles.checkIcon}>✔</span>}
          </button>
        ))}
      </main>
    </div>
  );
}
