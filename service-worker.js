self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : { title: 'Notification', body: 'You have a new message!' };
    
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: '/icon.png', // Change this to your own icon file
            badge: '/badge.png', // Optional small icon for notification
        })
    );
});

// Handle notification click
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/') // Redirect user to your site when clicking notification
    );
});
