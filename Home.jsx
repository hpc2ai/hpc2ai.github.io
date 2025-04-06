import React from 'react';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #ffffff, #f0f4f8)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'sans-serif',
      color: '#1e3a8a',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
      }}>
        INF-HPC2AI
      </h1>

      <p style={{
        fontSize: '1.25rem',
        color: '#334155',
        maxWidth: '600px',
        marginBottom: '2rem'
      }}>
        Center for High-Performance Computing applied to Artificial Intelligence at the Institute of Informatics – UFRGS
      </p>

      <a href="#about" style={{
        backgroundColor: '#1e3a8a',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        textDecoration: 'none',
        fontSize: '1rem',
        transition: 'background-color 0.3s'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#3b82f6'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#1e3a8a'}
      >
        Learn More
      </a>
    </main>
  );
}
