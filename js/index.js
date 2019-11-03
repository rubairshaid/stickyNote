/*let board = document.getElementById("Board");
//var click = document.getElementsByClassName("newBoard");
let boards =new Array ();

function createBoard()
{

}
click.onclick = function (){
    
}*/

/*let cnt =0 ; 

function createBoard (){
    var newboard = document.createElement('button');
    var r= document.getElementsById('boardList')[0];
    r.appendChild(newboard);

}*/

function openB(ev , Bname){
    var tabcontent = document.getElementsByClassName("Bcontent");
    for(let i=0;i<tabcontent.length;i++)
    tabcontent[i].style.display= "none";
    var tabName=document.getElementsByClassName("tab");
    for(let i=0;i<tabcontent.length;i++)
    tabName[i].classname = tabName[i].className.replace("active","");
    document.getElementById(Bname).style.display = "block";
    ev.currentTarget.className += " active";
}

let BoardArrayList = new Array ();


function createBoard (){
    let  b = new board ();
}