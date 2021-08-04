# MERN

* MongoDB
* Express
* React
* Node

npm init -y
git init


## package.json
### scripts
"dev": "nodemon server.js",
"start": "node server.js"


server.js im root Ordner  
.gitignore im root erstellen Inhalt:
* .env
* node_modlues
* build


backend Ordner erstellen
packages für backend:
npm i -D nodemon
npm i express mongoose dotenv

server.js: normal aufbauen (nur ohne EJS und anderem PORT, da React auch auf 3000 läuft)

npx create-react-app frontend


# Allgemein
Wenn wir packages installieren: Überprüfen in welchem Ordner? Ist das package für unser Front oder Backend