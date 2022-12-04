let outputscreen =document.getElementById("outputscreen")

function display(num){
    outputscreen.value +=num;
    speak(num)
}
function Calculate(){

    try{
        outputscreen.value = eval(outputscreen.value);
        if(outputscreen.value>0)
            speak("equals"+outputscreen.value); 
        else{speak("equals minus"+outputscreen.value);}  
    }
    catch(error)
    {
        speak("Invalid")
        alert("Invalid")
    }
}

function Clear(){

    outputscreen.value = "";
    speak("clear")
}
function dal(){
    outputscreen.value = outputscreen.value.slice(0,-1);
    speak("back")
}
function multiple(num)
{
    
        outputscreen.value +=num;
        speak("multiplied")
        
}
function divide(num)
{
    outputscreen.value +=num;
    speak("Divide")
}

function minus(num)
{
    outputscreen.value +=num;
    speak("minus")
}
function dot(num)
{
    outputscreen.value +=num;
    speak("dot")
}


function speak(x)
{
let speech = new SpeechSynthesisUtterance();
speech.lang = "en-US";
                
speech.text = x;
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;
                
window.speechSynthesis.speak(speech);
}  