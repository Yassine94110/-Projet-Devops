// Importation d'Express
const express = require('express');

// Création d'une nouvelle application Express
const app = express();

// Définition du port
const port = 3000;

// Route GET pour répondre 'Hello' à la racine
app.get('/', (req, res) => {
  res.send('Hello');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
