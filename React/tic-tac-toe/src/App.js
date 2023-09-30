import { click } from '@testing-library/user-event/dist/click';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [grid, setGrid] = useState([ 
    [null,null,null],
    [null,null,null],
    [null,null,null],
  ]);
  const [player,setPlayer]= useState(1)
  const [gameWinner,setGameWinner]= useState(null)

  const clickHandler = (row,col)=>{
    let updatedGrid=[...grid]
    updatedGrid[row][col] = player; 
    setGrid(updatedGrid)
    setPlayer(player===1? 2:1)
    checkForWinner()
  }
  const checkCount = (p1Count,p2Count) =>{
    let winner=null ; 
    if (p1Count=== 3){
      winner= 1 
    }else if(p2Count === 3 ){
      winner= 2 
    }
    return winner

  }
  const checkForWinner = () =>{ 
    let winner = null;

    // Check horizontally and vertically
    for (let i = 0; i < 3; i++) {
      let p1RowCount = 0;
      let p2RowCount = 0;
      let p1ColCount = 0;
      let p2ColCount = 0;
  
      for (let j = 0; j < 3; j++) {
        // Check rows
        if (grid[i][j] === 1) {
          p1RowCount++;
        } else if (grid[i][j] === 2) {
          p2RowCount++;
        }
  
        // Check columns
        if (grid[j][i] === 1) {
          p1ColCount++;
        } else if (grid[j][i] === 2) {
          p2ColCount++;
        }
      }
  
      if (checkCount(p1RowCount, p2RowCount)) {
        winner = checkCount(p1RowCount, p2RowCount);
      } else if (checkCount(p1ColCount, p2ColCount)) {
        winner = checkCount(p1ColCount, p2ColCount);
      }
    }
  
    // Check diagonals
    let p1Diagonal1Count = 0;
    let p2Diagonal1Count = 0;
    let p1Diagonal2Count = 0;
    let p2Diagonal2Count = 0;
  
    for (let i = 0; i < 3; i++) {
      // Check diagonal from top-left to bottom-right
      if (grid[i][i] === 1) {
        p1Diagonal1Count++;
      } else if (grid[i][i] === 2) {
        p2Diagonal1Count++;
      }
  
      // Check diagonal from top-right to bottom-left
      if (grid[i][2 - i] === 1) {
        p1Diagonal2Count++;
      } else if (grid[i][2 - i] === 2) {
        p2Diagonal2Count++;
      }
    }
  
    if (checkCount(p1Diagonal1Count, p2Diagonal1Count)) {
      winner = checkCount(p1Diagonal1Count, p2Diagonal1Count);
    } else if (checkCount(p1Diagonal2Count, p2Diagonal2Count)) {
      winner = checkCount(p1Diagonal2Count, p2Diagonal2Count);
    }
  
    // If there's a winner, you can update your state or perform other actions
    if (winner !== null) {
      setGameWinner(winner)
      // console.log(`Player ${winner} wins!`);
      // You can update the state or perform other actions here
    }
  }
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <table>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIdx) => (
                <td key={colIdx}
                onClick={()=>clickHandler(rowIndex,colIdx)}
                >{
                  cell==null ? '-'
                  :cell===1 ?'1'
                  :'2'
                   }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* <p>Player is the winner</p> */}
      {gameWinner !== null && (<p>Game Winner: {gameWinner}</p>)}
    </div>
  );
}

export default App;
