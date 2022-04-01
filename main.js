width=0
height=0

speak_data="";
to_number="";
draw_musa="";

var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition()

function start()
{
    document.getElementById("status").innerHTML="System is listening so speak OR ELSE SOMETHING WILL HAPPEN! (and trust me you don't want to know what!)"
    recognition.start()
}

recognition.onresult=function(event)
{
    console.log(event)
    var content=event.results[0][0].transcript
    to_number=Number(content)
    if(Number.isInteger(to_number))
    {
        document.getElementById("status").innerHTML="Started Drawing Musa"
        draw_musa="set"
    }

    else{
        document.getElementById("status").innerHTML="The speech has not recognized a number"
    }
    document.getElementById("status").innerHTML="The Speech Has Been Recognized As "+content

    if(content=="musa"||content=="draw a musa")
    {
        x=Math.floor(Math.random()*900)
        y=Math.floor(Math.random()*600)
        document.getElementById("status").innerHTML="Started Drawing A musa"
        
    }
}

function preload()
{
    musa=loadImage("4.jpg")
}

function setup()
{
    canvas=createCanvas(900,600)
    width=window.innerWidth;
    height=window.innerheight;
}

function draw()
{
    if(draw_musa=="set")
    {
        image(musa,100,100,x,y)
        document.getElementById("status").innerHTML="Musa is drawn"
        draw_musa="";
    }
}



