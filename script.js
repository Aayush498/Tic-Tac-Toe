let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner() {
  if (
    // Rows
    (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== null) ||
    (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] !== null) ||
    (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== null) ||
    // Columns
    (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== null) ||
    (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== null) ||
    (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== null) ||
    // Diagonals
    (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== null) ||
    (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== null)
  ) {
    showModal(`Winner is ${currentPlayer}`, "#4caf50"); // Green for winner
    return;
  }

  if (!arr.some((e) => e === null)) {
    showModal("Draw!!!", "#f44336"); // Red for draw
  }
}

function showModal(message, color) {
  // Create modal element
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContent.innerText = message;

  modal.style.backgroundColor = color; // Set background color
  document.body.appendChild(modal);
  modal.appendChild(modalContent);

  // Close modal on click
  modal.addEventListener("click", () => {
    document.body.removeChild(modal);
    resetGame();
  });
}

function resetGame() {
  arr.fill(null);
  document.querySelectorAll(".col").forEach((col) => (col.innerText = ""));
  currentPlayer = "X";
  document.getElementById("message").innerText = "Player X's Turn";
}

function handleClick(el) {
  const id = Number(el.id);
  if (arr[id] != null) return;
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.getElementById(
    "message"
  ).innerText = `Player ${currentPlayer}'s Turn`;
  console.log(arr);
}


// let currentPlayer = "X";
// let arr = Array(9).fill(null);

// function checkWinner() {
//   if (
//     // Rows
//     (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== null) ||
//     (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] !== null) ||
//     (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== null) ||
//     // Columns
//     (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== null) ||
//     (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== null) ||
//     (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== null) ||
//     // Diagonals
//     (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== null) ||
//     (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== null)
//   ) {
//     document.write(`Winner is ${currentPlayer}`);
//     return;
//   }

//   if (!arr.some((e) => e === null)) {
//     document.write(`Draw!!!`);
//   }
// }

// function handleClick(el) {
//   const id = Number(el.id);
//   if (arr[id] != null) return;
//   arr[id] = currentPlayer;
//   el.innerText = currentPlayer;
//   checkWinner();
//   currentPlayer = currentPlayer === "X" ? "0" : "X";
//   console.log(arr);
// }
