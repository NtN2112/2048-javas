let board=[[2,2,4,4],[0,2,0,2],[2,4,2,4],[0,0,2,2]]
function left(board){
    let newboard=[]
    for (row of board){row=row.filter(num=>num!==0)
        for (let i =0;i<row.length-1;i++){if (row[i]==row[i+1]){row[i]*=2;row[i+1]=0}}
        row=row.filter(num=>num!==0)
        while (row.length<4){row.push(0)}
        newboard.push(row)}
        return newboard}
function right(board){
    let newboard=[]
    for (row of board){row=row.reverse()}
    newboard=left(board)
    for (row of newboard){row=row.reverse()}
    return newboard}
function RtC(board){
    newboard=[]
    for(let i =0;i<4;i++){row=[];
    for(let j=0;j<4;j++){row.push(board[j][i])}
    newboard.push(row)}
    return newboard
}
function up(board){
    board=RtC(board)
    board=left(board)
    board=RtC(board)
    return board
}
function down(board){
    board=RtC(board)
    board=right(board)
    board=RtC(board)
    return board
}
board=up(board)
console.log(board)