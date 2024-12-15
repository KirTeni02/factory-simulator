// game.js

// Contador de madera
let woodCount = 0;

// Contador de objetos visibles
let visibleObjects = 0;

// Límite máximo de objetos en pantalla
const maxVisibleObjects = 10;

// Referencias al área de juego y contador
const gameArea = document.getElementById("game-area");
const woodCounter = document.getElementById("wood-count");

// Función para generar trozos de madera
function spawnWood() {
  // Verificar si se puede generar más madera
  if (visibleObjects >= maxVisibleObjects) return;

  const woodPiece = document.createElement("div");
  woodPiece.classList.add("wood-piece");

  // Generar posición aleatoria dentro del área
  const x = Math.random() * (gameArea.offsetWidth - 30); // Resto 30 para evitar que se salga
  const y = Math.random() * (gameArea.offsetHeight - 30);

  woodPiece.style.left = `${x}px`;
  woodPiece.style.top = `${y}px`;

  // Incrementar el contador de objetos visibles
  visibleObjects++;

  // Agregar evento de clic para recolectar madera
  woodPiece.addEventListener("click", () => {
    woodCount++;
    woodCounter.textContent = woodCount;

    // Reducir el contador de objetos visibles al recolectar
    visibleObjects--;

    // Eliminar la madera del área de juego
    woodPiece.remove();
  });

  // Agregar el trozo de madera al área de juego
  gameArea.appendChild(woodPiece);

  // Eliminar automáticamente después de 5 segundos si no se recoge
  setTimeout(() => {
    if (woodPiece.parentNode) {
      woodPiece.remove();

      // Reducir el contador de objetos visibles al eliminar automáticamente
      visibleObjects--;
    }
  }, 5000);
}

// Generar madera cada segundo si no se ha alcanzado el límite
setInterval(spawnWood, 1000);
