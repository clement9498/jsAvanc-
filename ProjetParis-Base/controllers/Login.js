import app from '../app/app.js';

export default class Login {

    show() {
        app.mvc.loadView(`login`).then(() =>{
            this.listener();
        });
    }


    listener() {
        document.querySelectorAll('[data-provider]').forEach(btn => {
            btn.addEventListener('click', (event) => {
                switch(event.currentTarget.dataset.provider) {
                    case 'google' :
                        var provider = new firebase.auth.GoogleAuthProvider();
                        break;
                    case 'gitHub' :
                        var provider = new firebase.auth.GithubAuthProvider();
                        break;
                }
                
                firebase.auth().signInWithPopup(provider).then((result) => {
                    document.querySelector('#linkConnexion').textContent = `Bienvenue ${result.user.displayName}`;
                    app.mvc.router.navigateTo('/');
                });
            })
        })
    }
}