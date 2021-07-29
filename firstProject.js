const colors = ["red","green","blue","dodgerblue","cyan", "rbga(255,255,0,0.5)", "#ffbc00"];

const btn = document.querySelector("button"); // this is a reference to the button element of html page

const colorText = document.querySelector("span"); // this is reference to the span tag of html page

btn.addEventListener("click",()=>{ // 
    const randomNumber = myFavNumbers();
    document.body.style.backgroundColor = colors[randomNumber];
    colorText.textContent = colors[randomNumber]; 
});
const myFavNumbers = () =>{
    return Math.floor(Math.random()*colors.length);
 

}