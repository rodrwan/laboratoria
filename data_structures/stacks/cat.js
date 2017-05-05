const sumArr = (arr) => arr.reduce((a,b)=>a+b,0)

//check rows
function checkRow(arr) {
    for(let i = 0; i <= 6; i = i + 3) {
        if(arr[i] === arr[i + 1] && arr[i + 1] == arr[i + 2]) {
            console.log("gano: " + arr[i]); //update the state result
            return true
        }
    }
    return false
}

//check columns
function checkColumns(arr) {
    for(var i = 0; i <= 2 ; i++) {
        if(arr[i] === arr[i + 3] && arr[i + 3] === arr[i + 6]) {
            console.log("gano: " + arr[i]); //update the state result
            return true;
        }
    }
    return false;
}

function checkDiag (arr) {
  //check diagonals
  for(var i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
      if(arr[i] === arr[i + j] && arr[i + j] === arr[i + 2*j]) {
          console.log("gano: " + arr[i]); //update the state result
          return true;
      }
  }
  return false;
}

function solveCat (arr) {
  let board = arr[0].concat(arr[1], arr[2])
  console.log(board)
  if (checkRow(board)) {
    return
  }

  if (checkColumns(board)) {
    return
  }

  if (checkDiag(board)) {
    return
  }
}


var game = [
  ['x', 'o', 'x'],
  ['o', 'x', 'o'],
  ['o', 'o', 'x']
]

var game = [
  ['x', 'o', 'o'],
  ['o', 'o', 'x'],
  ['o', 'x', 'x']
]

solveCat(game)
