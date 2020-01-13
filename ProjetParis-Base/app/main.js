import app from './app.js';

import config from './config.js';
import Home from '../controllers/Home.js';
import About from '../controllers/About.js';
import Search from '../controllers/Search.js';
import Login from '../controllers/Login.js';


// --------------------------------------------------------------------------------------------------------------------
// INITIALISATION DE L'APPLICATION
// --------------------------------------------------------------------------------------------------------------------

function initializeRouter() {

    app.mvc.router = new Router({
        mode: 'hash',
        root: '/index.html',
        page404: function (path) {
            console.log('/' + path + ' Page not found');
        }
    });

    app.mvc.router.add('/', () => (new Home()).show());
    app.mvc.router.add('/about', () => (new About()).show());
    app.mvc.router.add('/search', () => (new Search()).show());
    app.mvc.router.add('/login', () => (new Login()).show());
    app.mvc.router.check().addUriListener();
}


// --------------------------------------------------------------------------------------------------------------------
// CODE PRINCIPAL
// --------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    // Initialisation du routeur.
    initializeRouter();
    firebase.initializeApp(config.firebase);

    if ('serviceWorker' in navigator) {
        // Mise en place du serviceWorker
        navigator.serviceWorker.register('../service-worker.js', { scope: '/' })
        .then(function(reg) {
            let deferredPrompt;
            let btnApp = document.getElementById('webApp');
            btnApp.style.display = 'none';

 
            window.addEventListener('beforeinstallprompt', (event) => {
                deferredPrompt = event;
                btnApp.style.display = 'block';
            })
 
 
            btnApp.addEventListener('click', (e) => {
                e.preventDefault()
               
                btnApp.style.display = 'none';
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then(() => {             
                    btnApp.parentNode.removeChild(btnApp);
                })
            })
        })
    }
});