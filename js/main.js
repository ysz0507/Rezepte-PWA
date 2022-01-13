if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./swasdf.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope:',  registration.scope);
    }).catch(function(error) {
      console.log('ServiceWorker registration failed:', error);
    });
  }