import React from 'react';

function App() {
  const clienti = [
    { id: 1, nome: 'Mario Rossi', email: 'mario.rossi@email.com' },
    { id: 2, nome: 'Luca Bianchi', email: 'luca.bianchi@email.com' },
    { id: 3, nome: 'Giulia Verdi', email: 'giulia.verdi@email.com' },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Gestione Clienti</h1>
      <ul>
        {clienti.map((cliente) => (
          <li key={cliente.id}>
            <strong>{cliente.nome}</strong> – {cliente.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
