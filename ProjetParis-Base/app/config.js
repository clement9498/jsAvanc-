// --------------------------------------------------------------------------------------------------------------------
// CONFIGURATION DE L'APPLICATION
// --------------------------------------------------------------------------------------------------------------------

const config = {
    // Configuration de la plateforme Firebase
    firebase: {
        apiKey: "AIzaSyBgBq3_M-ACc2FB7AAL1sCk11b7-jBflyQ",
        authDomain: "monbetdeprojetdeouf.firebaseapp.com",
        databaseURL: "https://monbetdeprojetdeouf.firebaseio.com",
        projectId: "monbetdeprojetdeouf",
        storageBucket: "monbetdeprojetdeouf.appspot.com",
        messagingSenderId: "785241979059",
        appId: "1:785241979059:web:7ee0b802ef3e4a6b5298c6",
        measurementId: "G-2ZXRP34S2P"
    },
    openDataURL : 'https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-',
};


// La configuration est exportée afin d'être accessible par d'autres modules.
export default config;