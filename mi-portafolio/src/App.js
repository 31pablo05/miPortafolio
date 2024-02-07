import logo from './logo.svg';
import './App.css';
import React from 'react';
import ThemeToggle from './Components/themeToggle/ThemeToggle'; // Asegúrate de que la ruta de importación sea correcta
import Contacto from './Components/Contacto/contacto'; // Importa el componente Contacto

function App() {
  return (
    <ThemeToggle defaultTheme="light">
      {({ theme, toggleTheme }) => (
        <div className={`App ${theme}`}>
          <header>
            <h1>Mi Portafolio</h1>
            <button onClick={toggleTheme}>Cambiar Tema</button>
            <Contacto /> {/* Agrega el componente Contacto en el encabezado */}
          </header>
          <main>
            {/* Contenido de tu aplicación */}
          </main>
          <footer>
            {/* Pie de página */}
            <Contacto /> {/* Agrega el componente Contacto en el pie de página */}
          </footer>
        </div>
      )}
    </ThemeToggle>
  );
}

export default App;
