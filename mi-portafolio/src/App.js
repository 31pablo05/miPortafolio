import logo from './logo.svg';
import './App.css';
import React from 'react';
import ThemeToggle from './Components/ThemeToggle'; // Asegúrate de que la ruta de importación sea correcta

function App() {
  return (
    <ThemeToggle defaultTheme="light">
      {({ theme, toggleTheme }) => (
        <div className={`App ${theme}`}>
          <header>
            <h1>Mi Portafolio</h1>
            <button onClick={toggleTheme}>Cambiar Tema</button>
          </header>
          <main>
            {/* Contenido de tu aplicación */}
          </main>
          <footer>
            {/* Pie de página */}
          </footer>
        </div>
      )}
    </ThemeToggle>
  );
}

export default App;
