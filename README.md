My App NodeJS: ExpressJS, Jade, MongoDb

// Utilisez l�outil de g�n�rateur d�applications, express, pour cr�er rapidement un squelette d�application:

npm install express-generator -g

express -h
    Usage: express [options][dir]
  Options:
    -h, --help          output usage information
    -V, --version       output the version number
    -e, --ejs           add ejs engine support (defaults to jade)
        --hbs           add handlebars engine support
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory

express myapp                     //  G�n�rer une application avec ejs, stylus et gitignore
                                  //  express --ejs --css stylus --git  myapp

// Installez les d�pendances :
cd myapp
npm install

// Installer nodemon pour �viter de red�marrer l'application � chaque fois
npm install -g nodemon
nodemon                          // ou nodemon app.js ou installer npm i -S nodemon en local et changer "start": "nodemon app.js" dans package.json
                                // apr�s executer npm run start ou nodemon app.js


// Ouvrez un navigateur et acc�dez �:
http://localhost:3000/

// La page doit contenir le texte suivant:
Express
Welcome to Express


/** Changer le moteur de template **/
// Pour changer de moteur de template apr�s l'intallation par d�faut, commencez par supprimer Jade, pour cela entrez la commande suivante :
npm rm jade

// Par d�faut Express.js utile le moteur de template Jade. Swig ce rapproche au langage de templating de Symfony 2 twig. Si vous �tes plut�t habituer au JSP, je vous conseille EJS.

// Supprimez �galement la d�pendance Jade dans le package.json et ajoutez la d�pendance Ejs ou Swig :
   package.json :
   ...
   "ejs": "1.x"
   ...


// Puis faite un npm install pour installer ejs.

   Ensuite, nous devons indiquer � Express.js d�utiliser Ejs. Pour cela rendez-vous dans le fichier app.js.

   Commencer par faire un require de ejs :

   app.js :
   ...
   var ejs         = require('ejs');
   ...

   Supprimer les lignes suivantes qui correspondent � l�utilisation de Jade :

   app.js :
   ...
   // view engine setup
   app.set('views', path.join(__dirname, 'views'));
   app.set('view engine', 'jade');
   ...

   // Enfin ajouter ses lignes pour indiquer � Express.js l�utilisation du moteur de template Ejs :

   app.js :
   ...
   // view engine setup
   // utilisation du moteur de ejs pour les .html
   app.engine('html', ejs.renderFile);
   // utiliser le moteur de template pour les .html
   app.set('view engine', 'html');
   // dossier des vues
   app.set('views', path.join(__dirname, 'views'));

   // view cache
   app.set('view cache', false); // d�sactivation du cache express
   swig.setDefaults({ cache: false }); // d�sactivation du cache ejs
   ...
   Vous pouvez voir qu�il y a deux syst�mes de cache pour les vues g�n�rer. Comme nous sommes en d�veloppement, ils sont d�sactives.

   Nous avons maintenant le moteur de template Ejs pr�t qui se lancera sur les fichiers .html.