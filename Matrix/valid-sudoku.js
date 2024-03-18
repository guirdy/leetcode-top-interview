/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  const set = new Set()

  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          if (board[i][j] !== ".") {
              const value = board[i][j]

              const row = `row ${i} value ${value}`
              const column = `column ${j} value ${value}`
              const box = `box ${Math.floor(i/3)}, ${Math.floor(j/3)} value ${value}`

              if (set.has(row) || set.has(column) || set.has(box)) {
                  return false
              } else {
                  set.add(row)
                  set.add(column)
                  set.add(box)
              }
          }
      }
  }

  return true
};
