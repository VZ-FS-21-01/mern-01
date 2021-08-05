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
* wir senden json zurück
* unser static Ordner ist nun das, was wir in unserem react build haben.
* **Am Ende:** ein Catch All, das alle Anfragen die NICHT an unseren "API" gehen auf die index-seite unseres React Projekts wirft
* **package.json** "build": "cd frontend && npm run build", "install-client": "cd frontend && npm install", "heroku-postbuild": "npm run install-client && npm run build"
* heroku-postbuild wird von heroku zusätzlich zu dem start auch ausgeführt. Es installiert nun alle packages für unser Frontend und führt den react-build aus

## Frontend
* npx create-react-app frontend
* **package.json** den Eintrag  
* "proxy": "http://localhost:5000",  
erstellen. (Stellt in der Dev diesen Link vor die React Links) => wir müssen nichts in der Devolment / Produktion Env an den Links ändern
* axios
* was auch immer wir sonst brauchen (react-router-dom, ...)
* in den Componenten wo wir Daten aus / an unser Backend brauchen nutzen wir axios und die methoden, die wir auf der jeweiligen URL liegen haben


# Allgemein
* Wenn wir packages installieren: Überprüfen in welchem Ordner? Ist das package für unser Front- oder Backend?


# Häufige Probleme:
* git init im root vergessen => wir haben ein git repo in unserem frontend Ordner und bekommen Probleme
* => **im frontend Ordner** 
* `rm -rf .git`
* entfernt den git Ordner