# Device Tracker 📍

A real-time location sharing and tracking application that allows you to share your location with friends and track their locations on an interactive map.

## 🌟 Features

- **Real-time Location Sharing**: Share your current location with friends instantly
- **Live Tracking**: Track your friends' locations as they move in real-time
- **Interactive Map**: Beautiful, responsive map interface using OpenStreetMap
- **Multi-user Support**: See all connected friends on the same map
- **Professional Loading Screen**: Smooth loading animation while the app initializes
- **Smart State Management**: Intelligent loading states for Socket.IO, map, and geolocation
- **Automatic Updates**: Location updates automatically as users move
- **Connection Management**: Automatic handling of user connections and disconnections

## 🚀 How It Works

### Location Sharing
1. **Connect**: Users connect to the same Socket.IO server
2. **Share Location**: Each user shares their GPS coordinates using browser geolocation
3. **Broadcast**: Server broadcasts location updates to all connected clients
4. **Display**: All users appear as markers on the interactive map

### Friend Tracking
- When friends connect to the same server, their locations are automatically shared
- Each user's location is tracked using high-accuracy GPS
- Real-time updates show movement as it happens
- Markers update automatically when users move

## 🛠️ Technologies & Libraries

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Socket.IO** - Real-time communication library
- **EJS** - Templating engine for rendering HTML

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Client-side logic
- **Leaflet.js** - Interactive maps library
- **OpenStreetMap** - Map tile provider

### Real-time Communication
- **Socket.IO** - Enables real-time, bidirectional communication
- **WebSocket Protocol** - Provides low-latency connection
- **Geolocation API** - Browser API for GPS coordinates

## 📋 Prerequisites

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- Modern web browser with GPS support

## ⚡ Installation & Setup

## 🎯 Usage

1. **Share with Friends**: Send your friends the same server URL
2. **Connect**: Each friend opens the URL in their browser
3. **Allow Location**: Grant location permission when prompted
4. **Track**: See all connected friends as markers on the map
5. **Real-time Updates**: Watch as friends move around

## 🔧 Project Structure

```
device-tracker/
├── app.js              # Main server file
├── package.json        # Dependencies and scripts
├── views/
│   └── index.ejs      # Main HTML template
├── public/
│   ├── css/
│   │   └── style.css  # Styling
│   └── js/
│       └── script.js  # Client-side logic
└── README.md          # This file
```

## 🎨 Customization

### Map Settings
- **Tile Layer**: Currently using OpenStreetMap (free)
- **Zoom Level**: Default zoom set to 16
- **Center Point**: Initially centered at [0, 0]

### Location Settings
- **Accuracy**: High accuracy GPS enabled
- **Update Interval**: Real-time updates as position changes
- **Timeout**: 10-second timeout for location requests

## 🔒 Privacy & Security

- **Location Permission**: Users must explicitly allow location access
- **No Data Storage**: Location data is not stored on the server
- **Real-time Only**: Location sharing only works while connected
- **User Control**: Users can disconnect at any time

## 🚨 Troubleshooting

### Common Issues

1. **Location Not Working**
   - Ensure HTTPS is enabled (required for geolocation)
   - Check browser location permissions
   - Verify GPS is enabled on device

2. **Can't See Friends**
   - Ensure all users are connected to the same server
   - Check network connectivity
   - Verify Socket.IO connection

3. **Map Not Loading**
   - Check internet connection
   - Verify Leaflet.js CDN links are accessible
   - Clear browser cache

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## ‍💻 Author

Created by [Vishal Thakur]

---

**Note**: This application is designed for sharing location with trusted friends. Always respect privacy and get consent before tracking someone's location.
