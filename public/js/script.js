// Loader management
const loader = document.getElementById('loader');
let appReady = false;
let socketConnected = false;
let mapInitialized = false;

// Function to hide loader when everything is ready
function hideLoader() {
    if (appReady && socketConnected && mapInitialized) {
        loader.classList.add('hidden');
    }
}

// Initialize Socket.IO connection
const socket = io();

// Socket connection events
socket.on('connect', () => {
    console.log('Connected to server');
    socketConnected = true;
    hideLoader();
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
    socketConnected = false;
    // Could show a reconnection message here
});

// Geolocation setup
if(navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        socket.emit('send-location', { latitude, longitude});
        console.log('Location sent:', latitude, longitude);

        // Mark app as ready when we get first location
        if (!appReady) {
            appReady = true;
            hideLoader();
        }
    },
    (error) => {
        console.log('Geolocation error:', error);
        // Still mark as ready even if location fails
        if (!appReady) {
            appReady = true;
            hideLoader();
        }
    },
    {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
    }
);
} else {
    console.log('Geolocation not supported');
    // Mark as ready even without geolocation
    appReady = true;
    hideLoader();
}

// Initialize map
const map = L.map('map').setView([0, 0], 16);

// Map load event
map.on('load', () => {
    console.log('Map initialized');
    mapInitialized = true;
    hideLoader();
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Vishal Thakur',
}).addTo(map);

const markers = {};

// Handle location updates from other users
socket.on('receive-location', (data) => {
    const { id, latitude, longitude } = data;
    map.setView([latitude, longitude]);
    if(markers[id]){
        markers[id].setLatLng([latitude, longitude]);
    }
    else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});

// Handle user disconnections
socket.on('user-disconnected', (id) => {
    if(markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});

// Fallback: hide loader after 10 seconds if something goes wrong
setTimeout(() => {
    if (!loader.classList.contains('hidden')) {
        console.log('Hiding loader due to timeout');
        loader.classList.add('hidden');
    }
}, 10000);
