/*f (typeof document !== "undefined") {
  import("./style.css").then(() => {
    const app = document.querySelector<HTMLParagraphElement>("#app");
    if (app) {
      app.textContent = "If you can see this, Tailwind is working.";
    }
  });
}

console.log("Hello from src/main.ts");

export {};
*/

let rows: number = 8;
let colums: number = 10;

function createMatrixSeat(rows: number, colums: number): number[][] {
  let matriz: number[][] = [];

  for (let row = 0; row < rows; row++) {
    matriz[row] = [];

    for (let colum = 0; colum < colums; colum++) {
      matriz[row][colum] = 0;
    }
  }

  return matriz;
}

const matrix = createMatrixSeat(rows, colums);


function printMatrix(matrix: number[][]): void {
  for (let i = 0; i < rows; i++) {
    console.log(`${matrix[i].map((seat) => (seat === 0 ? 'l' : 'X')).join(' ')}`)
  }

}


function reservado(row: number, colum: number): void {
  if (matrix[row][colum] === 0) {
    matrix[row][colum] = 1;
    console.log("Asiento reservado con exito")
  } else {
    console.log("Asiento ocupado");
  }
}


function countSeats(matrix: number[][]): [number, number] {
  let ocupiedSeat: number = 0;
  let freeSeat: number = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1) {
        ocupiedSeat++;
      } else {
        freeSeat++;
      }
    }
  }
  return [ocupiedSeat, freeSeat]
}

function continueSeats(
  matrix: number[][]
): [[number, number], [number, number]] | null {

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length - 1; col++) {
      if (matrix[row][col] === 0 && matrix[row][col + 1] === 0) {
        return [[row, col], [row, col + 1]];
      }
    }
  }

  return null;
}





reservado(2, 1)
reservado(2, 1)

let countedSeats: [number, number] = countSeats(matrix)

console.log(`El numero de asientos ocupados es: ${countedSeats[0]} y los asientos disponibles son: ${countedSeats[1]}.`)

console.log(`Los asientos continuos juntos son ${continueSeats(matrix)}`)
printMatrix(matrix)





