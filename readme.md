# MERN

* MongoDB
* Express
* React
* Node

## root Ordner:
`npm init -y`
`git init`


## root package.json
### scripts
* `"dev": "nodemon server.js",`
* `"start": "node server.js"`


### server.js im root Ordner  
### .gitignore im root erstellen Inhalt:
* .env
* node_modlues
* build


## Server
* express
* mongoose
* was auch immer wir noch brauchen (dotenv, ...)
* server: normal aufbauen (models, controllers, routes)
* nur ohne EJS und anderem PORT, da React auch auf 3000 läuft


## Frontend
* npx create-react-app frontend
* **Frontend package.json** den Eintrag  
* "proxy": "http://localhost:5000",  
erstellen. (Stellt in der Dev diesen Link vor die React Links) => wir müssen nichts in der Devolment / Produktion Env an den Links ändern
* axios
* was auch immer wir sonst brauchen (react-router-dom, ...)


# Allgemein
* Wenn wir packages installieren: Überprüfen in welchem Ordner? Ist das package für unser Front- oder Backend?


# Häufige Probleme:
* git init im root vergessen => wir haben ein git repo in unserem frontend Ordner und bekommen Probleme
* => **im frontend Ordner** 
* `rm -rf .git`
* entfernt den git Ordner