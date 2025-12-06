<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css">
        <title>2048 GAME</title>
    </head>
    <body>
        <header>2048</header>
        <div class="tablee">
            <table>
                <tr>
                <td id = "cell1"></td>
                <td id = "cell2"></td>
                <td id = "cell3"></td>
                <td id = "cell4"></td>
                </tr>
                <tr>
                <td id = "cell5"></td>
                <td id = "cell6"></td>
                <td id = "cell7"></td>
                <td id = "cell8"></td>
                </tr>
                <tr>
                <td id = "cell9"></td>
                <td id = "cell10"></td>
                <td id = "cell11"></td>
                <td id = "cell12"></td>
                </tr>
                <tr>
                <td id = "cell13"></td>
                <td id = "cell14"></td>
                <td id = "cell15"></td>
                <td id = "cell16"></td>
                </tr>
            </table>
        </div>
        <div class="buttons">
            <button id="reset">RESET</button>
        </div>
        <script src="script.js">jh</script>
    </body>
</html>




















body{
    background-color: #faf8f0;
    font-family:Arial, Helvetica, sans-serif;
    color:#806958
}
header{
    text-align: center;
    font-size: 60px;
    font-weight: bolder;
}
.tablee{
    display:flex;
    justify-content:center ;
    align-items: center;
}
table{
    border-collapse:collapse;
    margin-top:40px;
    margin-bottom:40px;
}
td{
    width:60px;
    height:60px;
    border:5px solid #856b58;
    background-color: #f5efda;
    text-align:center;
    font-weight: bold;
}
.buttons{
    display:flex;
    justify-content:center ;
    align-items: center;
}
button{
    background-color:#f5efda ;
    border:0px;
    border-radius:10px;
    width:60px;
    height:50px;
    color:#806958;
    font-weight: bolder;
}























let board=[[0,2,0,0],[0,2,0,0],[0,0,0,0],[0,0,0,0]]

function update_row(start, row){
  for(let i = start; i < start + 4; i++){
    let cellId = "cell" + String(i);
    document.getElementById(cellId).innerHTML = row[i - start];
  }
}

function update_board(board){
  for (let i = 0; i < 4; i++){
    let num = (i * 4) + 1
    update_row(num, board[i])
  }
}

function left(board){
    let newboard=[]
    for (row of board){row=row.filter(num=>num!==0)
        for (let i =0;i<row.length-1;i++){if (row[i]==row[i+1]){row[i]*=2;row[i+1]=0}}
        row=row.filter(num=>num!==0)
        while (row.length<4){row.push(0)}
        newboard.push(row)}
        return newboard}

function right(board){
    let reversed = board.map(row => row.slice().reverse());
    let moved = left(reversed);
    return moved.map(row => row.slice().reverse());}

function RtC(board){
    new_board = []
    for (let i = 0; i < 4; i++){
        let row = []
        for (let j = 0; j < 4; j++){
            row.push(board[j][i])
        }
        new_board.push(row)
    }
    return new_board
}


function up(board){
    board = RtC(board)
    board = left(board)
    board = RtC(board)
    return board
}

function down(board){
    board = RtC(board)
    board = right(board)
    board = RtC(board)
    return board
}

function randomnum(board,num){
  let num1 = Math.floor(Math.random() * 4)
  let num2 = Math.floor(Math.random() * 4)
  do {
    num1 = Math.floor(Math.random() * 4);
    num2 = Math.floor(Math.random() * 4);
  } while (board[num1][num2] !== 0);
  board[num1][num2] = num
  
  return board
}
function checkNotMoving(oldboard,newboard){
  for(let i =0; i <4;i++){
    for(let j=0; j<4;j++){
      if (oldboard[i][j]!== newboard[i][j])
        return false
    }
  }
  return true
}


document.addEventListener("keydown", function(event) {
  let old=board
  if (event.key === "ArrowLeft"){
    board = left(board)
  }
  else if (event.key === "ArrowRight"){
    board = right(board)
  }
  else if (event.key === "ArrowUp"){
    board = up(board)
  }
  else if (event.key === "ArrowDown"){
    board = down(board)
  }
  if(!checkNotMoving(old,board)){
    if(Math.random()<0.1 ){board=randomnum(board,4)};
    board = randomnum(board,2);
    update_board(board);
  }
})
document.getElementById("reset").addEventListener("click", () => {
  board=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
  board = randomnum(board,2);
  board = randomnum(board,2);
  update_board(board);
})
update_board(board)
