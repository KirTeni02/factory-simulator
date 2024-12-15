// game.js

// Contador de madera recolectada y objetos activos
let woodCount = 0;
let activeWoodPieces = 0; // Contador de trozos de madera en pantalla

// Referencias al área de juego y contador
const gameArea = document.getElementById("game-area");
const woodCounter = document.getElementById("wood-count");

// Límite de trozos de madera visibles
const MAX_WOOD_PIECES = 10;

// Función para generar trozos de madera
function spawnWood() {
  if (activeWoodPieces >= MAX_WOOD_PIECES) return; // No generar más si ya hay 10

  const woodPiece = document.createElement("div");
  woodPiece.classList.add("wood-piece");

  // Generar posición aleatoria dentro del área
  const x = Math.random() * (gameArea.offsetWidth - 30); // Resto 30 para evitar que se salga
  const y = Math.random() * (gameArea.offsetHeight - 30);

  woodPiece.style.left = `${x}px`;
  woodPiece.style.top = `${y}px`;

  // Agregar evento de clic para recolectar madera
  woodPiece.addEventListener("click", () => {
    woodCount++;
    woodCounter.textContent = woodCount;
    woodPiece.remove(); // Eliminar el trozo de madera
    activeWoodPieces--; // Reducir el contador de trozos activos
  });

  // Agregar el trozo de madera al área de juego
  gameArea.appendChild(woodPiece);
  activeWoodPieces++; // Incrementar el contador de trozos activos

  // Eliminar automáticamente después de 5 segundos si no se recoge
  setTimeout(() => {
    if (woodPiece.parentNode) {
      woodPiece.remove();
      activeWoodPieces--; // Reducir el contador si se elimina automáticamente
    }
  }, 5000);
}

// Generar madera cada segundo
setInterval(spawnWood, 1000);
