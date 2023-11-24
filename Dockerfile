# Étape 1: Utiliser une image de base Node.js
FROM node:16-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers 'package.json' et 'package-lock.json' (si disponible)
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier les fichiers et dossiers du projet dans le répertoire de travail du conteneur
COPY . .

# Exposer le port sur lequel votre application s'exécute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "server.js"]
