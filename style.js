let string="";

const handleClear=()=>{
    const display =document.querySelector(".display");
    string=""
    display.value=string;
}
const handleSinglClear=()=>{
    string = string.slice(0, -1);
    const display =document.querySelector(".display");
    display.value=string;
}
const handleInput=(input)=>{
    string+=input;
   const display =document.querySelector(".display");
   display.value+=input
}
const handleEval=()=>{
    const display =document.querySelector(".display");
    try{
        display.value=eval(string);
    }catch(err){
        display.value="Error";
    }
}