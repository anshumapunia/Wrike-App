let btn=document.getElementById( 'abc' );
let output = document.getElementById('demo');


function getRandomNumber(min, max) {
let step1 = max-min +1;
let step2 = Math. random()*step1;
let result = Math. floor(step2) + min;
return result;
}
function createArrayOfNumbers(start,end)
{
let myArray = [];
for(let i=start; i<=end;i++){
myArray. push( i);
}
return myArray;
}
let numbersarray=createArrayOfNumbers(100000, 999999);
// console.log(numbersarray);
btn.addEventListener("click",() =>{
    if(numbersarray.length ==0)
    {
        output.innerText = "No More Random Numbers";
        return;
    }
    let randomIndex = getRandomNumber(0,numbersarray.length-1);
    let randomNumber= numbersarray[randomIndex];
    // console.log(randomNumber);
    numbersarray.splice(randomIndex,1);
    output.innerHTML = "Your Ticket Number is:"+randomNumber;
    console.log(randomNumber);
});


// let popup =document.getElementById("popup");
//     function opens(){
//         popup.classList.add("open-popup");

//     }

//     function closes(){
//         popup.classList.remove("open-popup");

//     }
