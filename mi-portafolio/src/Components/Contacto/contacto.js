import React from 'react';

const Contacto = () => {
  const copyEmailToClipboard = () => {
    const email = 'tu@email.com'; // Reemplaza con tu dirección de correo electrónico
    navigator.clipboard.writeText(email)
      .then(() => {
        console.log('Dirección de correo electrónico copiada al portapapeles');
        // Aquí puedes mostrar un mensaje de éxito o realizar otras acciones si es necesario
      })
      .catch(err => {
        console.error('Error al copiar la dirección de correo electrónico: ', err);
      });
  };

  return (
    <section id="contacto">
      <h2>Contacto</h2>
      <div>
        <p>Haz clic en el botón para copiar mi dirección de correo electrónico:</p>
        <button onClick={copyEmailToClipboard}>Copiar correo electrónico</button>
      </div>
    </section>
  );
};

export default Contacto;
