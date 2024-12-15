// game.js

// Contador de madera
let woodCount = 0;

// Referencias al área de juego y contador
const gameArea = document.getElementById("game-area");
const woodCounter = document.getElementById("wood-count");

// Función para generar trozos de madera
function spawnWood() {
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
    woodPiece.remove(); // Eliminar la madera al recolectarla
  });

  // Agregar el trozo de madera al área de juego
  gameArea.appendChild(woodPiece);

  // Eliminar automáticamente después de 5 segundos si no se recoge
  setTimeout(() => {
    if (woodPiece.parentNode) {
      woodPiece.remove();
    }
  }, 5000);
}

// Generar madera cada segundo
setInterval(spawnWood, 1000);