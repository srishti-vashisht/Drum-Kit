//detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;      //.drum is a button class


for(i=0;i<numberOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);   //setting eventlistners on all buttons ,when any button click then function should run(handleclick)    //on button click handleClick function will run
                                                                                //when button pressed ,event Listner gets triggered
}

function handleClick()
{   
    /*var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    /*this.style.color="white";                 /*using this keyword we'll get the identity of the button that trigerred that event,on button click will chenge text color white */
    
    var buttonInnerHTMl=this.innerHTML;
    makeSound(buttonInnerHTMl);
    buttonAnimation(buttonInnerHTMl);
    

}

//Detecting Keyboard press

document.addEventListener("keypress",function(event){             //Passing the event or any parameter to the function we can check the keyboard events that triggered the event listner     //Adding event listner to keyboard event
    console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);

})


//Playing sounds based on events triggered - key press or button click

function makeSound(Key){

    switch(Key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");      //CREATED new object tom1 ,it's a new audio object that is linked to tom1.mp3 audio file 
            tom1.play();                                    //using Audio's(object) method play() to play the sound
            break;
        case "a": 
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s": 
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
         case "d": 
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j": 
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k": 
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l": 
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default: console.log(buttonInnerHTMl);

    }

}

//Adding Animation on buttons

function buttonAnimation(currentKey){
  var activeButton =  document.querySelector("."+currentKey);    //Accessing the selected button

  activeButton.classList.add("pressed");    //Adding the styles specified in pressed(CSS) class to the active button classlist

  //setTimeout /delay so that the prrssed class style removed after sometime and buttons are back to normal

  //setTimeout(function,delay in milliseconds)
  setTimeout(function(){                          //After delay of 100 milliseconds ,remove styles added (i.e presed class) to buttons , Ammymous function implemented 
    activeButton.classList.remove("pressed");             
},100);


}

