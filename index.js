
var numberOfDrumButtons = document.querySelectorAll(".drum").length;      //.drum is a button class


 for(i=0;i<numberOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);        //on button click handleClick function will run

}

/*document.querySelectorAll(".drum")[6].addEventListener("click",handleClick);
document.querySelectorAll(".drum")[0].addEventListener("click",handleClick);
document.querySelectorAll(".drum")[1].addEventListener("click",handleClick);
document.querySelectorAll(".drum")[2].addEventListener("click",handleClick);
document.querySelectorAll(".drum")[3].addEventListener("click",handleClick);
document.querySelectorAll(".drum")[4].addEventListener("click",handleClick);
document.querySelectorAll(".drum")[5].addEventListener("click",handleClick);*/
function handleClick()
{
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    /*this.style.color="white";                 /*using this keyword we'll get the identity of the button that trigerred that event,on button click will chenge text color white */
    
}
