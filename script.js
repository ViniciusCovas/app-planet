const planets = [
    { name: "Sol", image: "/images/sun.png", description: "El Sol es la estrella central de nuestro sistema solar." },
    { name: "Mercurio", image: "/images/mercury.png", description: "Mercurio es el planeta más pequeño y más cercano al Sol." },
    { name: "Venus", image: "/images/venus.png", description: "Venus es el segundo planeta desde el Sol y el más caliente del sistema solar." },
    { name: "Tierra", image: "/images/earth.png", description: "La Tierra es nuestro hogar y el único planeta conocido con vida." },
    { name: "Marte", image: "/images/mars.png", description: "Marte es conocido como el planeta rojo y tiene el monte más alto del sistema solar." },
    { name: "Júpiter", image: "/images/jupiter.png", description: "Júpiter es el planeta más grande del sistema solar." },
    { name: "Saturno", image: "/images/saturn.png", description: "Saturno es famoso por sus impresionantes anillos." },
    { name: "Urano", image: "/images/uranus.png", description: "Urano es el séptimo planeta desde el Sol y tiene un eje de rotación único." },
    { name: "Neptuno", image: "/images/neptune.png", description: "Neptuno es el planeta más lejano (conocido) del Sol." }
];

let currentPlanetIndex = 0;

const planetImage = document.getElementById('planet-image');
const planetName = document.getElementById('planet-name');
const planetDescription = document.getElementById('planet-description');
const prevButton = document.getElementById('prev-planet');
const nextButton = document.getElementById('next-planet');

function updatePlanetDisplay() {
    const planet = planets[currentPlanetIndex];
    planetImage.src = planet.image;
    planetImage.alt = planet.name;
    planetName.textContent = planet.name;
    planetDescription.textContent = planet.description;
}

prevButton.addEventListener('click', () => {
    currentPlanetIndex = (currentPlanetIndex - 1 + planets.length) % planets.length;
    updatePlanetDisplay();
});

nextButton.addEventListener('click', () => {
    currentPlanetIndex = (currentPlanetIndex + 1) % planets.length;
    updatePlanetDisplay();
});

updatePlanetDisplay();
