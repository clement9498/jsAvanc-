self.addEventListener('install', async (event) => {
    console.log('Install')
    event.waitUntil(
        caches.open('paris_events_1.0.0').then((cache) => {
            return cache.addAll([
                // la route principale
                '/',
                // le point d'entrée html
                '/index.html',
            ]).then(() => {
                // On doit maintenant mettre en cache les fichiers externes
            }).catch(console.log)
        })
    );
 });
 
 
 // Le cache dynamique (cache de navigation)
 self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.delete('events-cache-dynamic').then(() => self.clients.claim())
    )
 })
 
 
 self.addEventListener('fetch', function(event) {
    // tout ce qui devra etre stocké en cache
    console.log(event.request)
    caches.match(event.request)
        .then(response => {
            let data = response || fetch(event.request)
            return data.then(responseFetch => {
                caches.open('events-cache-dynamic')
                    .then(cache => cache.put(event.request, responseFetch))
                        return responseFetch.clone()
            })
    })
 }) 