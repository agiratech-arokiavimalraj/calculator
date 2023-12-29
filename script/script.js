let firstNumber=0;
let secondNumber = 0;
let co = 0;
let operator = 0;
let equ = false;
let punch = false;
let fn;
let sn;
function performer(x){
    switch(x){
        case 0:{
            if(equ && operator==0){
                equ=false;
                clears();
                Syn(x);
            }else{
                Syn(x);
            }            
            break;
        }
        case 1:{
            if(equ && operator==0){
                equ=false;
                clears();
                Syn(x);
            }else if(equ==false){
                Syn(x);
            }
            break;
        }
        case 2:{
            if(equ && operator==0){
                equ=false;
                clears();            
                Syn(x);
            }else{
                Syn(x);
            }
            break;            
        }
        case 3:{
            if(equ  && operator==0){
                equ=false;
                clears();
                Syn(x);
            }else{
                Syn(x);
            }
            break;
        }
        case 4:{
            if(equ && operator==0){
                equ=false;
                clears();
                Syn(x);
            }else{
                Syn(x);
            }
            break;
        }
        case 5:{
            if(equ && operator==0){
                equ=false;
                clears();
                Syn(x);
            }else{
                Syn(x);
            }
            break;
        }
        case 6:{
            if(equ && operator==0){
                equ=false;
                clears();
                Syn(x);
            }else{
                Syn(x);
            }
            break;            
        }
        case 7:{
            if(equ && operator==0){
                equ=false;
                clears();
                Syn(x);
            }else{
                Syn(x);
            }
            break;            
        }
        case 8:{
            if(equ && operator==0){
                equ=false;
                clears();
                Syn(x);
            }else{
                Syn(x);
            }
            break;
        }
        case 9:{
            if(equ && operator==0){
                equ=false;
                clears();
                Syn(x);
            }else{
                Syn(x);
            }
            break;            
        }
    }
}
function Syn(x){
    if(firstNumber==0 && operator==0){
        firstNumber = x;
        document.getElementById("dis-so").innerHTML = firstNumber;
    }
    else if(firstNumber!=0 && operator==0){
        firstNumber = firstNumber +""+x;
        document.getElementById("dis-so").innerHTML = firstNumber;
    }
    else if(firstNumber==0 && operator==1){
        firstNumber = x;
        document.getElementById("dis-so").innerHTML = parseFloat(secondNumber) +" "+"+"+" "+firstNumber;
    }
    else if(firstNumber!=0 && operator==1 ){
        firstNumber = firstNumber +""+x;
        document.getElementById("dis-so").innerHTML = parseFloat(secondNumber) +" "+"+"+" "+firstNumber;
    }
    else if(firstNumber==0 && operator==2){
        firstNumber = x;
        document.getElementById("dis-so").innerHTML = parseFloat(secondNumber) +" "+"-"+" "+firstNumber;
    }
    else if(firstNumber!=0 && operator==2 ){
        firstNumber = firstNumber +""+x;
        document.getElementById("dis-so").innerHTML = parseFloat(secondNumber) +" "+"-"+" "+firstNumber;
    }
    else if(firstNumber==0 && operator==3){
        firstNumber = x;
        document.getElementById("dis-so").innerHTML = parseFloat(secondNumber) +" "+"x"+" "+firstNumber;
    }
    else if(firstNumber!=0 && operator==3 ){
        firstNumber = firstNumber +""+x;
        document.getElementById("dis-so").innerHTML = parseFloat(secondNumber) +" "+"x"+" "+firstNumber;
    }
    else if(firstNumber==0 && operator==4){
        firstNumber = x;
        document.getElementById("dis-so").innerHTML = parseFloat(secondNumber) +" "+"/"+" "+firstNumber;
    }
    else if(firstNumber!=0 && operator==4 ){
        firstNumber = firstNumber +""+x;
        document.getElementById("dis-so").innerHTML = parseFloat(secondNumber) +" "+"/"+" "+firstNumber;
    }
    else if(firstNumber==0 && operator==5){
        firstNumber = x;
        document.getElementById("dis-so").innerHTML = parseFloat(secondNumber) +" "+"%"+" "+firstNumber;
    }
    else if(firstNumber!=0 && operator==5 ){
        firstNumber = firstNumber +""+x;
        document.getElementById("dis-so").innerHTML = parseFloat(secondNumber) +" "+"%"+" "+firstNumber;
    }
}
function clears(){
    firstNumber = 0;
    secondNumber = 0;
    co = 0;
    operator = 0;
    equ = false;
    punch = false;
    fn = 0;
    sn = 0;
    document.getElementById("dis-so").innerHTML = 0;
}
function dot(){
    if(punch==false){
    if(firstNumber==0 && secondNumber==0 && operator==0){
        firstNumber = ".";
        document.getElementById("dis-so").innerHTML = firstNumber;
        punch = true;
    }else if(firstNumber!=0 && secondNumber==0 && operator==0){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = firstNumber;
        punch = true;
    }
    else if(firstNumber==0 && secondNumber!=0 && operator==0){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = firstNumber;
        punch = true;
    }
    else if(firstNumber!=0 && secondNumber!=0 && operator==0){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = firstNumber;
        punch = true;
    }
    else if(firstNumber==0 && secondNumber==0 && operator==1){
        firstNumber = ".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"+"+" "+firstNumber;
        punch = true;
    }else if(firstNumber!=0 && secondNumber==0 && operator==1){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"+"+" "+firstNumber;
        punch = true;
    }
    else if(firstNumber==0 && secondNumber!=0 && operator==1){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"+"+" "+firstNumber;
        punch = true;
    }
    else if(firstNumber!=0 && secondNumber!=0 && operator==1){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"+"+" "+firstNumber;
        punch = true;
    }
    else if(firstNumber==0 && secondNumber==0 && operator==2){
        firstNumber = ".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"-"+" "+firstNumber;
        punch = true;
    }else if(firstNumber!=0 && secondNumber==0 && operator==2){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"-"+" "+firstNumber;
        punch = true;
    }
    else if(firstNumber==0 && secondNumber!=0 && operator==2){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"-"+" "+firstNumber;
        punch = true;
    }
    else if(firstNumber!=0 && secondNumber!=0 && operator==2){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"-"+" "+firstNumber;
        punch = true;
    }
    else if(firstNumber==0 && secondNumber==0 && operator==3){
        firstNumber = ".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"x"+" "+firstNumber;
        punch = true;
    }else if(firstNumber!=0 && secondNumber==0 && operator==3){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"x"+" "+firstNumber;
        punch = true;
    }
    else if(firstNumber==0 && secondNumber!=0 && operator==3){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"x"+" "+firstNumber;
        punch = true;
    }
    else if(firstNumber!=0 && secondNumber!=0 && operator==3){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"x"+" "+firstNumber;
        punch = true;
    }
    else if(firstNumber==0 && secondNumber==0 && operator==4){
        firstNumber = ".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"/"+" "+firstNumber;
        punch = true;
    }else if(firstNumber!=0 && secondNumber==0 && operator==4){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"/"+" "+firstNumber;
        punch = true;
    }
    else if(firstNumber==0 && secondNumber!=0 && operator==4){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"/"+" "+firstNumber;
        punch = true;
    }
    else if(firstNumber!=0 && secondNumber!=0 && operator==4){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"/"+" "+firstNumber;
        punch = true;
    }
    else if(firstNumber==0 && secondNumber==0 && operator==5){
        firstNumber = ".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"%"+" "+firstNumber;
        punch = true;
    }else if(firstNumber!=0 && secondNumber==0 && operator==5){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"%"+" "+firstNumber;
        punch = true;
    }
    else if(firstNumber==0 && secondNumber!=0 && operator==5){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"%"+" "+firstNumber;
        punch = true;
    }
    else if(firstNumber!=0 && secondNumber!=0 && operator==5){
        firstNumber = firstNumber +".";
        document.getElementById("dis-so").innerHTML = secondNumber+" "+"%"+" "+firstNumber;
        punch = true;
    }
    }
    else{
        alert("already decimal point is placed...");
    }    
}
function add(){
    operator = 1;
    punch = false;
    if (equ==false && secondNumber==0){       
        if(secondNumber==0)
        {
            document.getElementById("dis-so").innerHTML = firstNumber+" "+"+";
            secondNumber = firstNumber;
            firstNumber = 0;
        }
    }
    else if (equ==false && secondNumber==0){
        if(secondNumber==0)
        {
            document.getElementById("dis-so").innerHTML = firstNumber+" "+"+";
            secondNumber = firstNumber;
            firstNumber = 0;
        }
    }
    else if(equ==true && secondNumber!=0 &&  operator==0){
        if(firstNumber!=0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"+";
        }
        else if(firstNumber!=0 && co==0){
            secondNumber = firstNumber + co;
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"+";
        }
        else if(firstNumber==0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"+";
        }
    }
    else if(equ==true && secondNumber!=0 && operator==1){
        equals();
        if(firstNumber!=0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"+";
        }
        else if(firstNumber!=0 && co==0){
            secondNumber = firstNumber + co;
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"+";
        }
        else if(firstNumber==0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"+";
        }
    }
    else{
        equals();
        add();
        equ=false;
    }
} 
function sub(){
    operator = 2;
    punch = false;
    if (equ==false && secondNumber==0){
        if(secondNumber==0)
        {
            document.getElementById("dis-so").innerHTML = firstNumber+" "+"-";
            secondNumber = firstNumber;
            firstNumber = 0;
        }
    }
    else if (equ==false && secondNumber==0){
        if(secondNumber==0)
        {
            document.getElementById("dis-so").innerHTML = firstNumber+" "+"-";
            secondNumber = firstNumber;
            firstNumber = 0;
        }
    }
    else if(equ==true && secondNumber!=0 && operator==0){ 
        if(firstNumber!=0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"-";
        }
        else if(firstNumber!=0 && co==0){
            secondNumber = firstNumber + co;
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"-";
        }
        else if(firstNumber==0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"-";
        }
    }
    else if(equ==true && secondNumber!=0 && operator==2){
        if(firstNumber!=0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"-";
        }
        else if(firstNumber!=0 && co==0){
            secondNumber = firstNumber + co;
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"-";
        }
        else if(firstNumber==0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"-";
        }
    }
    else{
        equals();
        sub();
        equ=false;
    }
} 
function mul(){
    operator = 3;    
    punch = false;
    if (equ==false && secondNumber==0){
        if(secondNumber==0)
        {
            document.getElementById("dis-so").innerHTML = firstNumber+" "+"x";
            secondNumber = firstNumber;
            firstNumber = 0;
        }
    }
    else if (equ==false && secondNumber==0){
        if(secondNumber==0)
        {
            document.getElementById("dis-so").innerHTML = firstNumber+" "+"x";
            secondNumber = firstNumber;
            firstNumber = 0;
        }
    }
    else if(equ==true && secondNumber!=0 && operator==0){
        if(firstNumber!=0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"x";
        }
        else if(firstNumber!=0 && co==0){
            secondNumber = firstNumber + co;
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"x";
        }
        else if(firstNumber==0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"x";
        }
    }
    else if(equ==true && secondNumber!=0 && operator==3){
        if(firstNumber!=0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"x";
        }
        else if(firstNumber!=0 && co==0){
            secondNumber = firstNumber + co;
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"x";
        }
        else if(firstNumber==0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"x";
        }
    }
    else{
        equals();
        mul();
        equ=false;
    }
} 
function div(){
    operator = 4;    
    punch = false;
    if (equ==false && secondNumber==0){   
        if(secondNumber==0)
        {
            document.getElementById("dis-so").innerHTML = firstNumber+" "+"/";
            secondNumber = firstNumber;
            firstNumber = 0;
        }
    }
    else if (equ==false && secondNumber==0){
        if(secondNumber==0)
        {
            document.getElementById("dis-so").innerHTML = firstNumber+" "+"/";
            secondNumber = firstNumber;
            firstNumber = 0;
        }
    }
    else if(equ==true && secondNumber!=0 && operator==0){
        if(firstNumber!=0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"/";
        }
        else if(firstNumber!=0 && co==0){
            secondNumber = firstNumber + co;
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"/";
        }
        else if(firstNumber==0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"/";
        }
    }
    else if(equ==true && secondNumber!=0 && operator==4){
        if(firstNumber!=0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"/";
        }
        else if(firstNumber!=0 && co==0){
            secondNumber = firstNumber + co;
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"/";
        }
        else if(firstNumber==0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"/";
        }
    }
    else{
        equals();
        div();
        equ=false;
    }
}
function mod(){
    operator = 5;    
    punch = false;
    if (equ==false && secondNumber==0){   
        if(secondNumber==0)
        {
            document.getElementById("dis-so").innerHTML = firstNumber+" "+"%";
            secondNumber = firstNumber;
            firstNumber = 0;
        }
    }
    else if (equ==false && secondNumber==0){
        if(secondNumber==0)
        {
            document.getElementById("dis-so").innerHTML = firstNumber+" "+"%";
            secondNumber = firstNumber;
            firstNumber = 0;
        }
    }
    else if(equ==true && secondNumber!=0){
        if(firstNumber!=0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"%";
        }
        else if(firstNumber!=0 && co==0){
            secondNumber = firstNumber + co;
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"%";
        }
        else if(firstNumber==0 && secondNumber!=0){
            document.getElementById("dis-so").innerHTML = secondNumber+" "+"%";
        }
    }
    else{
        equals();
        mod();
        equ=false;
    }
} 
function dod(){
    if(firstNumber==0 && secondNumber==0){
        alert("Click Any value first");
    }else if(firstNumber>0 && secondNumber!=0){
        let ded = parseFloat(firstNumber);
        ded = ded *100;
        firstNumber = parseInt(ded);
        if(secondNumber!=0){
            if(operator==1){
                document.getElementById("dis-so").innerHTML = secondNumber+" "+"+"+" "+firstNumber;
            }
            else if(operator==2){
                document.getElementById("dis-so").innerHTML = secondNumber+" "+"-"+" "+firstNumber;
            }
            else if(operator==3){
                document.getElementById("dis-so").innerHTML = secondNumber+" "+"x"+" "+firstNumber;
            }
            else if(operator==4){
                document.getElementById("dis-so").innerHTML = secondNumber+" "+"/"+" "+firstNumber;
            }
            else if(operator==5){
                document.getElementById("dis-so").innerHTML = secondNumber+" "+"%"+" "+firstNumber;
            }
        }
        else if(secondNumber==0){
            document.getElementById("dis-so").innerHTML = firstNumber;
        }
    }
    else if(firstNumber==0 && secondNumber!=0){
        let ded = parseFloat(secondNumber);
        ded = ded *100;
        secondNumber = parseInt(ded);
        document.getElementById("dis-so").innerHTML = secondNumber;
    }
    else if(firstNumber>0 && secondNumber==0){
        let ded = parseFloat(firstNumber);
        ded = ded *100;
        firstNumber = parseInt(ded);
        document.getElementById("dis-so").innerHTML = firstNumber;
    }
}
function del(){
    if(firstNumber==0 && secondNumber==0){
        clears();
        document.getElementById("dis-so").innerHTML = 0;
        alert("Everything is been cleared");
    }else if(firstNumber>0){
        let de = parseFloat(firstNumber);
        de = de /10;
        firstNumber = parseInt(de);
        if(secondNumber!=0){
            if(operator==1){
                document.getElementById("dis-so").innerHTML = secondNumber+" "+"+"+" "+firstNumber;
            }
            else if(operator==2){
                document.getElementById("dis-so").innerHTML = secondNumber+" "+"-"+" "+firstNumber;
            }
            else if(operator==3){
                document.getElementById("dis-so").innerHTML = secondNumber+" "+"x"+" "+firstNumber;
            }
            else if(operator==4){
                document.getElementById("dis-so").innerHTML = secondNumber+" "+"/"+" "+firstNumber;
            }
            else if(operator==5){
                document.getElementById("dis-so").innerHTML = secondNumber+" "+"%"+" "+firstNumber;
            }
        }
        else if(secondNumber==0){
            document.getElementById("dis-so").innerHTML = firstNumber;
        }
    }
    else if(secondNumber>0){
        let de = parseFloat(secondNumber);
        de = de /10;
        secondNumber = parseInt(de);
        document.getElementById("dis-so").innerHTML = secondNumber;
    }
}
function equals(){   
    punch = false;
    equ = true;
    switch(operator){
        case 1:{
            if(firstNumber!=0 && secondNumber!=0){
                fn=parseFloat(firstNumber);
                sn=parseFloat(secondNumber);
                co=sn+fn;
                document.getElementById("dis-so").innerHTML = co;
                secondNumber = co;
                co=0;
                operator = 0;
                firstNumber =0;
                break;
            }
            else if(firstNumber!=0){
                fn=parseFloat(firstNumber);
                co=0+fn;
                document.getElementById("dis-so").innerHTML = co;
                secondNumber = co;
                co=0;
                operator = 0;
                firstNumber =0;
                break;
            }
        }
        case 2:{
            if(firstNumber!=0 && secondNumber!=0){
                fn=parseFloat(firstNumber);
                sn=parseFloat(secondNumber);
                co=sn-fn;
                document.getElementById("dis-so").innerHTML = co;
                secondNumber = co;
                co=0;
                operator = 0;
                firstNumber =0;
                break;
            }
            else if(firstNumber!=0){
                fn=parseFloat(firstNumber);
                co=0-fn;
                document.getElementById("dis-so").innerHTML = co;
                secondNumber = co;
                co=0;
                operator = 0;
                firstNumber =0;
                break;
            }          
        }
        case 3:{
            if(firstNumber!=0 && secondNumber!=0){
                fn=parseFloat(firstNumber);
                sn=parseFloat(secondNumber);
                co=sn*fn;
                document.getElementById("dis-so").innerHTML = co;
                secondNumber = co;
                co=0;
                operator = 0;
                firstNumber =0;
                break;
            }
            else if(firstNumber!=0){
                fn=parseFloat(firstNumber);
                co=0*fn;
                document.getElementById("dis-so").innerHTML = co;
                secondNumber = co;
                co=0;
                operator = 0;
                firstNumber =0;
                break;
            }     
        }
        case 4:{
            if(firstNumber!=0 && secondNumber!=0){
                fn=parseFloat(firstNumber);
                sn=parseFloat(secondNumber);
                co=sn/fn;
                document.getElementById("dis-so").innerHTML = co;
                secondNumber = co;
                co=0;
                operator = 0;
                firstNumber =0;
                break;
            }
            else if(firstNumber!=0){
                fn=parseFloat(firstNumber);
                co=0/fn;
                document.getElementById("dis-so").innerHTML = co;
                secondNumber = co;
                co=0;
                operator = 0;
                firstNumber =0;
                break;
            }          
        }
        case 5:{
            if(firstNumber!=0 && secondNumber!=0){
                fn=parseFloat(firstNumber);
                sn=parseFloat(secondNumber);
                co=sn%fn;
                document.getElementById("dis-so").innerHTML = co;
                secondNumber = co;
                co=0;
                operator = 0;
                firstNumber =0;
                break;
            }
            else if(firstNumber!=0){
                fn=parseFloat(firstNumber);
                co=0%fn;
                document.getElementById("dis-so").innerHTML = co;
                secondNumber = co;
                co=0;
                operator = 0;
                firstNumber =0;
                break;
            }
        }
    }
}