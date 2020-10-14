var tictac = [];
var lines = [[1,3,1],[4,6,1],[7,9,1],
            [1,7,3],[2,8,3],[3,9,3],
            [1,9,4],[3,7,2]];
//lines has 8 lines and each subarray has 3 elements a,b,c
var mark = "O";
// variable mark represents the mark O and X (player 1 and player 2)
var win = 0;
// 0 represents not yet winning for both player and 1 means last player with the mark value in variable mark wins
var score = [0,0];
var moves = 0;

function clickCheck( buttonId ){
    if(checkIfEmpty(buttonId)){
        assignTac( buttonId );
        if(checkWin()){
            addScore();
            displayWin();
            updateScore();
        }else{
            if(checkDraw()){
                alert("This game is a draw");
                clearGame();
            }else{
                mark = (mark=="O")? "X" : "O";
            }
        }
    }else{
        alert("That box had already been marked!");
    }
}

function assignTac( buttonId ){
    document.getElementById(buttonId).value = mark;
    tictac[buttonId] = mark;
    moves++;
}

function checkIfEmpty( buttonId ){
    return(tictac[buttonId]==undefined);
}

function checkWin(){
    for (var i = 0;i<8;i++){
        if (checkLine(lines[i][0],lines[i][1],lines[i][2])){
            win = 1;
            break;
        }else{
            continue;
        }
    }
    return(win==1);
}

function checkLine(a,b,c){
    var j = 0;
    //a is the start number, b is the last number and c is increment
    for(var i = a-1;i<=b-1;i+=c){ j = (tictac[i] == mark)? j+=1 : j ; }
    return (j == 3);
}

function displayWin(){
    alert("Player " + mark + " has won!");
    clearGame();
}

function clearGame(){
    moves = 0;
    mark = "O";
    win = 0;
    tictac = [];
    for(var i = 0;i<9;i++){
        document.getElementById(i).value = " ";
    }
}

function addScore(){
    switch(mark){
        case "O":
            score[0]++;
            break;
        case "X":
            score[1]++;
            break;
    }
}

function updateScore(){
    document.getElementById("scoreO").innerHTML = "O : " + score[0];
    document.getElementById("scoreX").innerHTML = "X : " + score[1];
}

function checkDraw(){
    return(moves == 9);
}