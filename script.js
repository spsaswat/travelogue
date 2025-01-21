// Initialize the map
const map = L.map('map').setView([20, 0], 2); // Centered globally, zoom level 2

// Add a tile layer to the map (using a tourist map)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="https://opentopomap.org/">OpenTopoMap</a> contributors'
}).addTo(map);

// Add markers with details for places visited
const places = [
    {
        coords: [48.8566, 2.3522],
        name: "Paris, France",
        purpose: "Vacation",
        experience: "Explored the Eiffel Tower and Louvre Museum.",
        instagram: "https://instagram.com/your-post-url"
    },
    {
        coords: [40.7128, -74.0060],
        name: "New York, USA",
        purpose: "Business Trip",
        experience: "Attended a tech conference and visited Times Square.",
        instagram: "https://instagram.com/your-post-url"
    },
    {
        coords: [35.6895, 139.6917],
        name: "Tokyo, Japan",
        purpose: "Cultural Exploration",
        experience: "Tried authentic sushi and visited temples.",
        instagram: "https://instagram.com/your-post-url"
    }
];

// Add markers to the map
places.forEach(place => {
    const popupContent = `
        <strong>${place.name}</strong><br>
        <em>Purpose:</em> ${place.purpose}<br>
        <em>Experience:</em> ${place.experience}<br>
        <a href="${place.instagram}" target="_blank">View Instagram Post</a>
    `;

    L.marker(place.coords)
        .addTo(map)
        .bindPopup(popupContent);
});
