
let firstNumber;
let secondNumber;
let operator;
let result;
let co;
let x;
function performer(x){
    let firstNumber;
    let secondNumber;
    let operator;
    let opeAcc;
    let result;
    let co;
    let x = 0;
    switch(x){
        case 1: {
            if(co==undefined && opeAcc==false){ 
                firstNumber =1;
                document.getElementById("dis-co").innerHTML = firstNumber ;
                co = firstNumber;
            }
            else if(opeAcc!=undefined && co!=undefined){
                firstNumber = x;
                document.getElementById("dis-co").innerHTML = co +" " +operator +" " + firstNumber;
            }
            else{
                firstNumber = x;
                document.getElementById("dis-co").innerHTML = co +" " +operator +" " + firstNumber;
            }
        
        }
        case 2: {
            if(co==null){ 
                firstNumber =2;
                document.getElementById("dis-co").innerHTML = firstNumber ;
            }
            else{
                firstNumber = x;
                document.getElementById("dis-co").innerHTML = co +" " +operator +" " + firstNumber;
            }
        
        }
        case 3: {
            if(co==null){ 
                firstNumber =3;
                document.getElementById("dis-co").innerHTML = firstNumber ;
            }
            else{
                firstNumber = x;
                document.getElementById("dis-co").innerHTML = co +" " +operator +" " + firstNumber;
            }
        
        }
        case 4: {
            if(co==null){ 
                firstNumber =4;
                document.getElementById("dis-co").innerHTML = firstNumber ;
            }
            else{
                firstNumber = x;
                document.getElementById("dis-co").innerHTML = co +" " +operator +" " + firstNumber;
            }
        
        }
        case 5: {
            if(co==null){ 
                firstNumber =5;
                document.getElementById("dis-co").innerHTML = firstNumber ;
            }
            else{
                firstNumber = x;
                document.getElementById("dis-co").innerHTML = co +" " +operator +" " + firstNumber;
            }
        
        }
        case 6: {
            if(co==null){ 
                firstNumber =6;
                document.getElementById("dis-co").innerHTML = firstNumber ;
            }
            else{
                firstNumber = x;
                document.getElementById("dis-co").innerHTML = co +" " +operator +" " + firstNumber;
            }
        
        }
        case 7: {
            if(co==null){ 
                firstNumber =7;
                document.getElementById("dis-co").innerHTML = firstNumber ;
            }
            else{
                firstNumber = x;
                document.getElementById("dis-co").innerHTML = co +" " +operator +" " + firstNumber;
            }
        
        }
        case 8: {
            if(co==null){ 
                firstNumber =8;
                document.getElementById("dis-co").innerHTML = firstNumber ;
            }
            else{
                firstNumber = x;
                document.getElementById("dis-co").innerHTML = co +" " +operator +" " + firstNumber;
            }
        
        }
    
        case 9: {
            if(co==null){ 
                firstNumber = 9;
                document.getElementById("dis-co").innerHTML = firstNumber ;
            }
            else{
                firstNumber = x;
                document.getElementById("dis-co").innerHTML = co +" " +operator +" " + firstNumber;
            }
        
        }
    
        case 0: {
            if(co==null){ 
                firstNumber =0;
                document.getElementById("dis-co").innerHTML = firstNumber ;
            }
            else{
                firstNumber = x;
                document.getElementById("dis-co").innerHTML = co +" " +operator +" " + firstNumber;
            }
        
        }
    
        case 11: {
            if(co==null){ 
                firstNumber =1;
                document.getElementById("dis-co").innerHTML = firstNumber ;
            }
            else{
                firstNumber = x;
                document.getElementById("dis-co").innerHTML = co +" " +operator +" " + firstNumber;
            }
        
        }
    
    }
    
}
document.getElementById("1").addEventListener("click", myFunction)
function add(){

}
function sub(){

}
function mul(){

}
function div(){

}
function mod(){

}
function clear(){

}
function del(){

}
function equals(){

}