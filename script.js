function one() {
    document.getElementById("display").innerHTML += "1" ;
    // document.getElementById("display").innerHTML = 1 ;

}

function two(){
    document.getElementById("display").innerHTML +=  "2" ;
}

function three(){
    document.getElementById("display").innerHTML += "3" ;
}

function add(){
    document.getElementById("display").innerHTML += " + " ;
}

function four(){
    document.getElementById("display").innerHTML += "4" ;
}

function five(){
    document.getElementById("display").innerHTML += "5" ;
}

function six(){
    document.getElementById("display").innerHTML += "6" ;
}

function sub(){
    document.getElementById("display").innerHTML += " - " ;
}

function seven(){
    document.getElementById("display").innerHTML += "7" ;
}

function eight(){
    document.getElementById("display").innerHTML += "8" ;
}

function nine(){
    document.getElementById("display").innerHTML += "9" ;
}

function mult(){
    document.getElementById("display").innerHTML += " * " ;
}

function CE(){
    document.getElementById("display").innerHTML = "" ;
}

function zero(){
    document.getElementById("display").innerHTML += "0" ;
}
function divide(){
    document.getElementById("display").innerHTML += "/" ;
}


function result(){
    x = document.getElementById("display").innerHTML ;
    y = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = eval(x , y);   
}


